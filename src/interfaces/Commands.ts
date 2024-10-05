import { 
    SlashCommandBuilder, 
    SlashCommandOptionsOnlyBuilder, 
    SlashCommandSubcommandBuilder, 
    SlashCommandSubcommandsOnlyBuilder 
} from "@discordjs/builders";

import { CommandInteraction } from "discord.js";


export interface Command {
    // Omit 代表從 SlashCommandBuilder 中排除 addSubcommandGroup 和 addSubcommand 兩個方法
    data: 
        Omit<SlashCommandBuilder, 'addSubcommandGroup' | 'addSubcommand'>
    |   SlashCommandOptionsOnlyBuilder;
    run: (interaction: CommandInteraction) => Promise<void>;
}