import { Collection, GatewayIntentBits } from "discord.js";

import { token } from "./config.json";
import { ModifiedClient } from "./classes/ModifiedClient";
import {
    returnCommandCollection,
    returnEventNodeRequires,
} from "./utils/collections";

//setup commands for use
const client = new ModifiedClient({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
    ],
});
client.commands = returnCommandCollection();

//setup event triggers
const discordEvents: Collection<any, any> = returnEventNodeRequires();
console.log("Setting up the following events:");
console.log(discordEvents.map((event) => event.name));

discordEvents.forEach((event: any) => {
    if (event.once) {
        client.once(event.type, (...args: any) => event.execute(...args));
    } else {
        client.on(event.type, (...args: any) => event.execute(...args));
    }
});

// Log in to Discord with your client's token
client.login(token);
