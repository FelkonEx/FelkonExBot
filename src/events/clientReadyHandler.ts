import { Client, Events } from "discord.js";

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute({ user }: Client) {
        console.log(`Ready! Logged in as ${user?.tag || ""}`);
    },
};
