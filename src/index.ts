import { Client	} from "discord.js";
import { IntentOptions } from "./config/IntentOptions";	// Importing the constant
import * as dotenv from "dotenv";
dotenv.config();


(async () => {
	const Bot =  new Client({ intents: IntentOptions });	// Using the constant		
	await Bot.login(process.env.BOT_TOKEN);
	Bot.on("ready", () => console.log('${Bot.user.tag} is ready!'));
})();
