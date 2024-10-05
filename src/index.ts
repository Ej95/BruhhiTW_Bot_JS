import { Client, Events, REST, Routes	} from "discord.js";
import { IntentOptions } from "./config/IntentOptions";	// Importing the constant
import * as dotenv from "dotenv"; // Importing dotenv
import { ValidateEnv } from "./utils/ValidateEnv";
import { OnInteractions } from "./events/OnInteractions";
import { CommandList } from "./commands/_CommandList";
import { LoadCommands } from "./commands/LoadCommands";
dotenv.config();


(async () => {
	//驗證環境變數
	if(!ValidateEnv()) {
		return;
	}

	const Bot =  new Client({ intents: IntentOptions });	// Using the constant	
	await Bot.login(process.env.BOT_TOKEN);

	Bot.on("ready", async() => {
		await LoadCommands();	
		console.log('Connected to Discord')
	});

	// 偵測互動並執行指令
	Bot.on(Events.InteractionCreate, async (interaction) => {
		await OnInteractions(interaction);
	});

})();
