import { ModifiedClient } from "classes/ModifiedClient";
import { Events, Message, ModalSubmitInteraction } from "discord.js";

const modalSubmitHandler = {
    name: "Modal Submit Handler",
    type: Events.InteractionCreate,
    async execute(interaction: ModalSubmitInteraction) {
        if (!interaction.isModalSubmit()) return;

        const client = interaction.client as ModifiedClient;
        const commandModal = client.commands.get(interaction.customId);

        if (!commandModal) {
            console.error(
                `No modal matching ${interaction.customId} was found.`,
            );
            return;
        }

        try {
            await commandModal.executeResponse(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({
                    content: "There was an error while executing this modal submission!",
                    ephemeral: true,
                });
            } else {
                await interaction.reply({
                    content: "There was an error while executing this modal submission!",
                    ephemeral: true,
                });
            }
        }
    },
};

export { modalSubmitHandler };
