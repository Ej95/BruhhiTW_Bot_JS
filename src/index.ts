import { Client	} from "discord.js";

(async () => {
	const Bot =  new Client();
	await Bot.login(process.env.BOT_TOKEN);
})();
