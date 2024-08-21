import * as fs from "fs";
import * as path from "path";
import { Collection } from "discord.js";

function returnCommandCollection(dirName: string): Collection<any, any> {
    const commands = new Collection();

    const foldersPath = path.join(dirName, "commands");
    const commandFolders = fs.readdirSync(foldersPath);

    for (const folder of commandFolders) {
        const commandsPath: string = path.join(foldersPath, folder);
        const commandFiles: Array<string> = fs
            .readdirSync(commandsPath)
            .filter((file: string) => file.endsWith(".ts"));

        for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file);
            const command = require(filePath);
            // Set a new item in the Collection with the key as the command name and the value as the exported module
            if ("data" in command && "execute" in command) {
                commands.set(command.data.name, command);
            } else {
                console.log(
                    `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`,
                );
            }
        }
    }

    return commands;
}

function returnEventNodeRequires(dirName: string): Array<NodeRequire> {
    const events: Array<NodeRequire> = new Array<NodeRequire>();

    const eventsPath = path.join(dirName, "events");

    const eventFiles: string[] = fs
        .readdirSync(eventsPath)
        .filter((file: string) => file.endsWith(".ts"));

    for (const file of eventFiles) {
        const filePath = path.join(eventsPath, file);
        events.push(require(filePath));
    }

    return events;
}

export { returnCommandCollection, returnEventNodeRequires };
