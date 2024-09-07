import { Collection, GatewayIntentBits } from "discord.js";

import { token } from "./config.json";
import { ModifiedClient } from "./classes/ModifiedClient";
import { utils } from "./utils";

//setup commands for use
const client = new ModifiedClient({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildModeration
    ],
});
client.commands = utils.returnCommandCollection();
client.cooldowns = new Collection();

//setup event triggers
const discordEvents: Collection<any, any> = utils.returnEventNodeRequires();
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
