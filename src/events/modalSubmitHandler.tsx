// module.exports = {
//     name: Events.InteractionCreate,
//     async execute(interaction) {
//         if (!interaction.isModalSubmit()) return;

//         if (interaction.customId === "recommendation-modal") {
//             const name =
//                 interaction.fields.getTextInputValue("nameInput") ??
//                 "No name provided";
//             const link =
//                 interaction.fields.getTextInputValue("linkInput") ??
//                 "No link provided";
//             const info =
//                 interaction.fields.getTextInputValue("infoInput") ??
//                 "No info provided";

//             let response = ` ### <@${interaction.user.id}> has recommended __*${name}*__ on stream!\n\n`;

//             response += `${link}\n`;
//             if (info) {
//                 response += `\`\`\` ${info} \`\`\`\n`;
//             }
//             response += `-# NOTE: Felkon may or may not do this, no promises :slight_smile:`;
//             await interaction.reply(response);
//         }
//     },
// };
