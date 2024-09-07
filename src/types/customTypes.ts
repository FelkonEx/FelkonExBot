import {
    ChatInputCommandInteraction,
    EmbedBuilder,
    Interaction,
    ModalSubmitInteraction,
    SlashCommandBuilder,
} from "discord.js";

//  Type for structuring of auto response responses
//  Current Use: Array<AutoResponses>
export interface AutoResponses {
    trigger: Array<string>;
    message?: string | EmbedBuilder;
}

//  Type for structuring embed exports to be ready for use
export interface EmbedExports {
    name: string;
    embed: EmbedBuilder;
}

export type ModalCommand = Command & {
    executeResponse?: (Interaction: ModalSubmitInteraction) => void;
};

export type Command = {
    cooldown?: number;
    data: SlashCommandBuilder;
    execute: (interaction: ChatInputCommandInteraction) => void;
};

export type DeleteMessageChannelOptions = {
    response?: string;
    appendUser?: boolean;
    deleteResponseTime?: number;
};
