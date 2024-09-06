import { CommandInteraction, Message, SlashCommandBuilder } from "discord.js";

const userInfoCommand = {
    data: new SlashCommandBuilder()
        .setName("user")
        .setDescription("Provides information about the user."),
    async execute(interaction: CommandInteraction) {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        const reply: Message = await interaction.reply({
            content: `This command was run by ${interaction.user.username}`,
            fetchReply: true,
        });
    },
};

export { userInfoCommand };
