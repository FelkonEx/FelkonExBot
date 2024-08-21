// const {
//   SlashCommandBuilder,
//   ActionRowBuilder,
//   // Events,
//   ModalBuilder,
//   TextInputBuilder,
//   TextInputStyle,
// } = require("discord.js");

// module.exports = {
//   data: new SlashCommandBuilder()
//     .setName("recommendation-modal")
//     .setDescription(
//       "Give FelkonEx a game / website recommendation! (NOW IN MODAL FORM!)"
//     ),
//   async execute(interaction) {
//     const modal = new ModalBuilder()
//       .setCustomId("recommendation-modal")
//       .setTitle("Recommend me something!");

//     // Add components to modal

//     // Create the text input components
//     const NameInput = new TextInputBuilder()
//       .setCustomId("nameInput")
//       // The label is the prompt the user sees for this input
//       .setLabel("What are you recommending?")
//       // Short means only a single line of text
//       .setStyle(TextInputStyle.Short);

//     const LinkInput = new TextInputBuilder()
//       .setCustomId("linkInput")
//       .setLabel("Link to recommendation:")
//       // Paragraph means multiple lines of text.
//       .setStyle(TextInputStyle.Short);

//     const InfoInput = new TextInputBuilder()
//       .setCustomId("infoInput")
//       .setLabel("Any extra info?")
//       .setStyle(TextInputStyle.Paragraph)
//       .setRequired(false);

//     // An action row only holds one text input,
//     // so you need one action row per text input.
//     const firstActionRow = new ActionRowBuilder().addComponents(NameInput);
//     const secondActionRow = new ActionRowBuilder().addComponents(LinkInput);
//     const thirdActionRow = new ActionRowBuilder().addComponents(InfoInput);

//     // Add inputs to the modal
//     modal.addComponents(firstActionRow, secondActionRow, thirdActionRow);

//     // Show the modal to the user
//     await interaction.showModal(modal);
//   },
// };
