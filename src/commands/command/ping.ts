import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../../interfaces/Commands";
import { CommandList } from "../_CommandList";

export const ping: Command = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    run: async (interaction) => {
        await interaction.reply('Pong!');
    }
};
