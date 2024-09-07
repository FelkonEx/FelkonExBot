import { AUTO_RESPONSES } from "./autoResponses";
import { HumbleBundleEmbed } from "./embeds/humbleBundleEmbed";
import { EmbedExports } from "types/customTypes";
import { DELETE_MESSAGE_CHANNELS } from "./deleteMessageChannels";

const EMBEDS: Array<EmbedExports> = [
    { name: "HumbleBundle", embed: HumbleBundleEmbed },
];

export { AUTO_RESPONSES, EMBEDS, DELETE_MESSAGE_CHANNELS };
