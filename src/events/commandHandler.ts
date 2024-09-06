import { ModifiedClient } from "classes/ModifiedClient";
import { CommandInteraction, Events } from "discord.js";

const commandHandler = {
    name: "Command Handler",
    type: Events.InteractionCreate,
    async execute(interaction: CommandInteraction) {
        if (!interaction.isCommand()) return;

        const client = interaction.client as ModifiedClient;
        const command = client.commands.get(interaction.commandName);

        if (!command) {
            console.error(
                `No command matching ${interaction.commandName} was found.`,
            );
            return;
        }
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({
                    content: "There was an error while executing this command!",
                    ephemeral: true,
                });
            } else {
                await interaction.reply({
                    content: "There was an error while executing this command!",
                    ephemeral: true,
                });
            }
        }
    },
};

export { commandHandler };
