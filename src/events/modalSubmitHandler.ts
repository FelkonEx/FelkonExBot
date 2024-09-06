import { Events, Message, ModalSubmitInteraction } from "discord.js";

const modalSubmitHandler = {
    name: "Modal Submit Handler",
    type: Events.InteractionCreate,
    async execute(interaction: ModalSubmitInteraction) {
        if (!interaction.isModalSubmit()) return;

        // console.log(interaction.customId);

        // // how do i pull this to it's own modal folder?
        // // pass through interaction
        // if (interaction.customId === "recommendation-modal") {
        //     const name =
        //         interaction.fields.getTextInputValue("nameInput") ??
        //         "No name provided";
        //     const link =
        //         interaction.fields.getTextInputValue("linkInput") ??
        //         "No link provided";
        //     const info =
        //         interaction.fields.getTextInputValue("infoInput") ??
        //         "No info provided";

        //     let response = ` ### <@${interaction.user.id}> has recommended __*${name}*__ on stream!\n\n`;

        //     response += `${link}\n`;
        //     if (info) {
        //         response += `\`\`\` ${info} \`\`\`\n`;
        //     }
        //     response += `-# NOTE: Felkon may or may not do this, no promises :slight_smile:`;
        //     await interaction.reply(response);
        // }
    },
};

export { modalSubmitHandler };
