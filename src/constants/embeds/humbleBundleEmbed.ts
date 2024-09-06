import { EmbedBuilder } from "discord.js";

export const HumbleBundleEmbed = new EmbedBuilder()
    .setColor(0x0099ff)
    .setTitle("I'm a Humble Bundle Partner!")
    .setURL("https://www.humblebundle.com?partner=FelkonEx")
    .setDescription(
        `If you would like to support charity and myself, one way of doing that is using my **Humble Bundle Partner Link**!\n <:felkon7:974164162324361216> https://www.humblebundle.com?partner=FelkonEx <:felkon7:974164162324361216> \n\n**Be sure to Change the Sliders under "Adjust Donation" for Bundles!**\n*By default the charities don't get much. So if you want to change that (or give me more of a kickback), you can do so there!*`,
    )
    .setThumbnail(
        "https://cdn.humblebundle.com/static/hashed/1f5efeea3c19a7af14bb6ad7917e685e8b6873f9.png",
    )
    .setFooter({
        text: "Referral link can be used for anything on Humble Bundle! Just make sure to click my link beforehand!",
    });
