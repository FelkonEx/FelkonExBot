import { ApplicationCommand, REST, Routes } from "discord.js";
import { clientId, guildId, token } from "./src/config.json";
import { returnCommandCollection } from "./src/utils/collections";

const dir = __dirname + "\\src";
const commands = returnCommandCollection(dir);
const slashCommands = commands.map((item) => item.data.toJSON());

const rest = new REST().setToken(token);

(async () => {
    try {
        console.log(
            `\nStarted refreshing ${slashCommands.length} application (/) commands.`,
        );

        const data: any = await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: slashCommands },
        );
        const castedResponse: Array<ApplicationCommand> = data;

        console.log(
            `Successfully reloaded ${castedResponse.length} application (/) commands.`,
        );
        console.log(
            "List of commands: " +
                castedResponse.map((item) => item.name).join(", ") +
                "\n",
        );
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
    }
})();
