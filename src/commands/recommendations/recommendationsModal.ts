import {
    SlashCommandBuilder,
    // Events,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ChatInputCommandInteraction,
    ActionRowBuilder,
    ModalActionRowComponentBuilder,
} from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName("recommendation-modal")
        .setDescription(
            "Give FelkonEx a game / website recommendation! (NOW IN MODAL FORM!)",
        ),
    async execute(interaction: ChatInputCommandInteraction) {
        const modal = new ModalBuilder()
            .setCustomId("recommendation-modal")
            .setTitle("Recommend me something!");

        // Add components to modal

        // Create the text input components
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

        // An action row only holds one text input,
        // so you need one action row per text input.
        // const firstActionRow = new ActionRowBuilder().addComponents(NameInput);
        // const secondActionRow = new ActionRowBuilder().addComponents(LinkInput);
        // const thirdActionRow = new ActionRowBuilder().addComponents(InfoInput);
        // const array = [firstActionRow, secondActionRow, thirdActionRow];
        // // Add inputs to the modal
        // modal.addComponents(firstActionRow, secondActionRow, thirdActionRow);

        // Show the modal to the user
        await interaction.showModal(modal);
    },
};
