import { CommandInteraction, Message, SlashCommandBuilder } from "discord.js";
import { Command } from "types/customTypes";

const pingCommand: Command = {
    cooldown: 10,
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
