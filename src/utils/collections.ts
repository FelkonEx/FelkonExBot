import { Collection } from "discord.js";
import { Commands } from "../commands/index";
import { Events } from "../events/index";

export function returnCommandCollection(): Collection<any, any> {
    const commandsCollection = new Collection();

    Commands.forEach((command) => {
        if ("data" in command && "execute" in command) {
            commandsCollection.set(command.data.name, command);
        }
    });

    return commandsCollection;
}

export function returnEventNodeRequires(): Collection<any, any> {
    const eventsCollection = new Collection();

    Events.forEach((event) => {
        if ("name" in event && "execute" in event && "type" in event) {
            eventsCollection.set(event.name, event);
        }
    });

    return eventsCollection;
}
