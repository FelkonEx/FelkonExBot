import { EmbedBuilder } from "discord.js";

import { AUTO_RESPONSES } from "./autoResponses";
import { HumbleBundleEmbed } from "./embeds/humbleBundleEmbed";

export interface EmbedExports {
    name: string;
    embed: EmbedBuilder;
}

const EMBEDS: Array<EmbedExports> = [
    { name: "HumbleBundle", embed: HumbleBundleEmbed },
];

export { AUTO_RESPONSES, EMBEDS };
