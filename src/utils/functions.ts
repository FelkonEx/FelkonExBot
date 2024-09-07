import { EmbedBuilder } from "@discordjs/builders";
import { AutoResponses } from "types/customTypes";

export function findAutoResponse(
    input: string,
    responses: Array<AutoResponses>,
): string | EmbedBuilder | undefined {
    for (const response of responses) {
        const regex = new RegExp(response.trigger.join("|"), "i");
        if (regex.test(input)) {
            return response.message;
        }
    }
    return undefined;
}
