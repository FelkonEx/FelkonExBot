import { CommandInteraction, Message, SlashCommandBuilder } from "discord.js";

const pingCommand = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with Pong!"),
    async execute(interaction: CommandInteraction) {
        const reply: Message = await interaction.reply({
            content: "Pong!",
            fetchReply: true,
        });
    },
};

export { pingCommand };
