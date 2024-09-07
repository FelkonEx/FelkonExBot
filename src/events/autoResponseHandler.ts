import { AUTO_RESPONSES, DELETE_MESSAGE_CHANNELS } from "../constants/index";
import { EmbedBuilder, Events, Message } from "discord.js";

const autoResponseHandler = {
    name: "Auto Response Handler",
    type: Events.MessageCreate,
    async execute(message: Message) {
        if (message.author.bot) return;

        const foundDeleteMessage = DELETE_MESSAGE_CHANNELS.get(
            message.channel.id,
        );

        if (foundDeleteMessage) {
            await message.delete();

            if (foundDeleteMessage.response) {
                const deleteMessage = foundDeleteMessage.appendUser
                    ? `<@${message.author.id}> ${foundDeleteMessage.response}`
                    : foundDeleteMessage.response;
                const reply = await message.channel.send(`${deleteMessage}`);

                setTimeout(async () => {
                    await reply.delete();
                }, foundDeleteMessage.deleteResponseTime || 5000);
            }
        } else {
            // need to optimize this, maybe using regex and the `findAutoResponse` function?
            const foundObject = AUTO_RESPONSES.find((obj) =>
                obj.trigger.some((trigger) =>
                    message.content.includes(trigger),
                ),
            );

            if (!foundObject) return;

            foundObject?.message instanceof EmbedBuilder
                ? await message.channel.send({
                      embeds: [foundObject?.message?.data],
                  })
                : await message.channel.send({ content: foundObject?.message });
        }
    },
};

export { autoResponseHandler };
