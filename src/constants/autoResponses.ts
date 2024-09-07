import { Embed, EmbedBuilder, APIEmbed } from "discord.js";
import HumbleBundleEmbed from "../data/embeds/HumbleBundle.json";
import { AutoResponses } from "types/customTypes";

const MESSAGE_AUTO_RESPONSES: Array<AutoResponses> = [
    {
        trigger: ["2", "two", "too"],
        message: "2?",
    },
    {
        trigger: ["who?"],
        message: "asked?",
    },
    {
        trigger: ["who asked?"],
        message: "I asked :)",
    },
];

const EMBED_AUTO_RESPONSES: Array<AutoResponses> = [
    {
        trigger: ["humble", "humblebundle"],
        message: generateEmebed(HumbleBundleEmbed),
    },
];

function generateEmebed(embed: APIEmbed): EmbedBuilder {
    return new EmbedBuilder(embed);
}

const AUTO_RESPONSES = EMBED_AUTO_RESPONSES.concat(MESSAGE_AUTO_RESPONSES);

export { AUTO_RESPONSES };
