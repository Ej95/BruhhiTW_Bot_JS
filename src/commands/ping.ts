import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interfaces/Commands";

// 建立一個新的指令
export const ping: Command = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Ping Pong"),
    async run(interaction) {
        await interaction.reply("Pong!");
    }
}