import { Client, Events } from "discord.js";

const clientReadyHandler = {
    name: "Client Ready Handler",
    type: Events.ClientReady,
    once: true,
    execute({ user }: Client) {
        console.log(`Ready! Logged in as ${user?.tag || ""}`);
    },
};

export { clientReadyHandler };
