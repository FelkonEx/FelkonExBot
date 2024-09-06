import { REST, Routes } from "discord.js";
import { clientId, guildId, token } from "./src/config.json";

const rest = new REST().setToken(token);

// for guild-based commands
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
	.then(() => console.log('\nSuccessfully deleted all guild commands.\n'))
	.catch(console.error);

// for global commands
rest.put(Routes.applicationCommands(clientId), { body: [] })
	.then(() => console.log('\nSuccessfully deleted all application commands.\n'))
	.catch(console.error);
