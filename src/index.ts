import { GatewayIntentBits } from "discord.js";

import { token } from "./config.json";
import { ModifiedClient } from "./classes/ModifiedClient";
import { returnCommandCollection, returnEventNodeRequires } from "./utils/collections";

//setup commands for use
const client = new ModifiedClient({ intents: [GatewayIntentBits.Guilds] });
client.commands = returnCommandCollection(__dirname);

//setup event triggers
const discordEvents: Array<NodeRequire> = returnEventNodeRequires(__dirname);
discordEvents.forEach((event: any) => {
    if (event.once) {
        client.once(event.name, (...args: any) => event.execute(...args));
    } else {
        client.on(event.name, (...args: any) => event.execute(...args));
    }
});

// Log in to Discord with your client's token
client.login(token);
