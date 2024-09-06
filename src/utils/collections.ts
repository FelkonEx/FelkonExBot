import { Collection } from "discord.js";
import { Commands } from "../commands/index";
import { Events } from "../events/index";

function returnCommandCollection(): Collection<any, any> {
    const commandsCollection = new Collection();

    Commands.forEach((command) => {
        if ("data" in command && "execute" in command) {
            commandsCollection.set(command.data.name, command);
        }
    });

    return commandsCollection;
}

// function returnModalResponseCollection(dirName: string): Collection<any, any> {
//     const commands = new Collection();

//     const foldersPath = path.join(dirName, "modalResponses");
//     const commandFolders = fs.readdirSync(foldersPath);

//     for (const folder of commandFolders) {
//         const commandsPath: string = path.join(foldersPath, folder);
//         const commandFiles: Array<string> = fs
//             .readdirSync(commandsPath)
//             .filter((file: string) => file.endsWith(".ts"));

//         for (const file of commandFiles) {
//             const filePath = path.join(commandsPath, file);
//             const command = require(filePath);
//             // Set a new item in the Collection with the key as the command name and the value as the exported module
//             if ("data" in command && "execute" in command) {
//                 commands.set(command.data.name, command);
//             } else {
//                 console.log(
//                     `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`,
//                 );
//             }
//         }
//     }

//     return commands;
// }

function returnEventNodeRequires(): Collection<any, any> {
    const eventsCollection = new Collection();

    Events.forEach((event) => {
        if ("name" in event && "execute" in event && "type" in event) {
            eventsCollection.set(event.name, event);
        }
    });

    return eventsCollection;
}

export { returnCommandCollection, returnEventNodeRequires };
