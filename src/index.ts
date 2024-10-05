import { Client	} from "discord.js";
import { IntentOptions } from "./config/IntentOptions";	// Importing the constant
import * as dotenv from "dotenv"; // Importing dotenv
import { ValidateEnv } from "./utils/ValidateEnv";
dotenv.config();


(async () => {
	//驗證環境變數
	if(!ValidateEnv()) {
		return;
	}

	const Bot =  new Client({ intents: IntentOptions });	// Using the constant		
	await Bot.login(process.env.BOT_TOKEN);
	Bot.on("ready", () => console.log(' ${Bot.user.tag} is ready!'));

})();
