import { Embed, EmbedBuilder, APIEmbed } from "discord.js";
import HumbleBundleEmbed from "../data/embeds/HumbleBundle.json";

export interface AutoResponses {
    trigger: Array<string>;
    embed?: EmbedBuilder;
    message?: string;
}

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
        trigger: ["humble", "humble bundle", "humble month"],
        embed: generateEmebed(HumbleBundleEmbed),
    },
];

function generateEmebed(embed: APIEmbed): EmbedBuilder {
    return new EmbedBuilder(embed);
}

const AUTO_RESPONSES = EMBED_AUTO_RESPONSES.concat(MESSAGE_AUTO_RESPONSES);

export { AUTO_RESPONSES };
