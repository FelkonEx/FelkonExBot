import {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    SlashCommandStringOption,
} from "discord.js";
import { Command } from "types/customTypes";

const recommendationCommand: Command = {
    data: new SlashCommandBuilder()
        .setName("recommendation")
        .setDescription("Give FelkonEx a game / website recommendation!")
        .addStringOption(
            (typeOption): SlashCommandStringOption =>
                typeOption
                    .setName("type")
                    .setDescription("The type of your recommendation")
                    .setRequired(true)
                    .addChoices(
                        { name: "Game", value: "game" },
                        { name: "Website", value: "website" },
                        { name: "Emote", value: "emote" },
                    ),
        )
        .addStringOption(
            (nameOption): SlashCommandStringOption =>
                nameOption
                    .setName("name")
                    .setDescription("The name of the recommendation")
                    .setRequired(true),
        )
        .addStringOption(
            (linkOption): SlashCommandStringOption =>
                linkOption
                    .setName("link")
                    .setDescription("Add a link to the Game / Website")
                    .setRequired(true),
        ) as SlashCommandBuilder,
    async execute(interaction: ChatInputCommandInteraction) {
        const botMessage = await interaction.reply({
            content: "Thanks for the recommendation!",
            fetchReply: true,
        });

        // // should it create a thread?
        // const type =
        //     interaction.options.getString("type") ?? "No type provided";
        // const name =
        //     interaction.options.getString("name") ?? "No name provided";
        // const link =
        //     interaction.options.getString("link") ?? "No link provided";
        // let response = ` ### <@${interaction.user.id}> has recommended `;
        // switch (type) {
        //     case "game":
        //         response += `playing __*${name}*__ `;
        //         break;
        //     case "website":
        //         response += `looking at __*${name}*__ `;
        //         break;
        //     default:
        //         response += `adding __*${name}*__ as an emote to use `;
        //         break;
        // }
        // response += "on stream!\n\n";
        // response += `${link}\n`;
        // response += `-# NOTE: Felkon may or may not do this, no promises :slight_smile:`;
        // const botMessage = await interaction.reply({
        //     content: response,
        //     fetchReply: true,
        // });
        // const thread = await botMessage.startThread({
        //     name: `${name} discussion:`,
        //     autoArchiveDuration: 10080, // Auto-archive duration in minutes
        //     reason: "Thread created for discussion",
        // });
        // const message = thread.send(
        //     "If there is any other info about this (or discussion), please post in this thread!",
        // );
    },
};

export { recommendationCommand };
