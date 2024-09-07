import {
    SlashCommandBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ChatInputCommandInteraction,
    ActionRowBuilder,
    ModalActionRowComponentBuilder,
    ModalSubmitInteraction,
    Message,
} from "discord.js";
import { ModalCommand } from "types/customTypes";

const recommendationsModalCommand: ModalCommand = {
    data: new SlashCommandBuilder()
        .setName("recommendation-modal")
        .setDescription(
            "Give FelkonEx a game / website recommendation! (NOW IN MODAL FORM!)",
        ),
    async execute(interaction: ChatInputCommandInteraction) {
        const modal = new ModalBuilder()
            .setCustomId("recommendation-modal")
            .setTitle("Recommend me something!");

        const NameInput = new TextInputBuilder()
            .setCustomId("nameInput")
            .setLabel("What are you recommending?")
            .setStyle(TextInputStyle.Short);

        const LinkInput = new TextInputBuilder()
            .setCustomId("linkInput")
            .setLabel("Link to recommendation:")
            .setStyle(TextInputStyle.Short);

        const InfoInput = new TextInputBuilder()
            .setCustomId("infoInput")
            .setLabel("Any extra info?")
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(false);

        modal.addComponents(
            new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
                NameInput,
            ),
            new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
                LinkInput,
            ),
            new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
                InfoInput,
            ),
        );
        await interaction.showModal(modal);
    },

    async executeResponse(interaction: ModalSubmitInteraction) {
        
        const name =
            interaction.fields.getField("nameInput").value ?? "No name provided";

        const link =
            interaction.fields.getField("linkInput").value ?? "No name provided";

        const info =
            interaction.fields.getField("infoInput").value ?? "No link provided";

        let response = ` ### <@${interaction.user.id}> has recommended `;
        switch (name) {
            case "game":
                response += `playing __*${link}*__ `;
                break;
            case "website":
                response += `looking at __*${link}*__ `;
                break;
            default:
                response += `adding __*${link}*__ as an emote to use `;
                break;
        }
        response += "on stream!\n\n";
        response += `${info}\n`;
        response += `-# NOTE: Felkon may or may not do this, no promises :slight_smile:`;

        const botMessage = await interaction.reply({
            content: response,
            fetchReply: true,
        });

        const thread = await botMessage.startThread({
            name: `${link} discussion:`,
            autoArchiveDuration: 10080, // Auto-archive duration in minutes
            reason: "Thread created for discussion",
        });

        const message = thread.send(
            "If there is any other info about this (or discussion), please post in this thread!",
        );
    },
};

export { recommendationsModalCommand };
