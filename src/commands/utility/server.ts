import { CommandInteraction, Message, SlashCommandBuilder } from "discord.js";
import { Command } from "types/customTypes";

const serverInfoCommand: Command = {
    data: new SlashCommandBuilder()
        .setName("server")
        .setDescription("Provides information about the server."),
    async execute(interaction: CommandInteraction) {
        // interaction.guild is the object representing the Guild in which the command was run
        const reply: Message = await interaction.reply({
            content: `This server is ${interaction.guild?.name} and has ${interaction.guild?.memberCount} members.`,
            fetchReply: true
        });
    },
};

export { serverInfoCommand };
