import { AUTO_RESPONSES } from "../constants/autoResponses";
import { Events, Message } from "discord.js";

module.exports = {
    name: Events.MessageCreate,
    async execute({ author, content, channel }: Message) {
        if (author.bot) return;

        const foundObject = AUTO_RESPONSES.find((obj) =>
            obj.trigger.some((trigger) => content.includes(trigger)),
        );

        if (!foundObject) return;
        if (foundObject?.embed?.data) {
            await channel.send({ embeds: [foundObject?.embed?.data] });
        }

        if (foundObject?.message) {
            await channel.send(foundObject?.message);
        }
    },
};
