import { CommandList } from "./_CommandList";
import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();


export const LoadCommands = async () => {
    const commands = [];
    for( const command of CommandList ) {
        if('data' in command && 'run' in command) {
            commands.push(command.data.toJSON());
        }else{
            console.warn('需要 data 和 run 方法 在 ${command} 中');
        }
    }

    const rest = new REST().setToken(process.env.BOT_TOKEN as string);

    (async () => {
        try {
            console.log(`Started refreshing ${commands.length} application (/) commands.`);

            // The put method is used to fully refresh all commands in the guild with the current set
            const data: any = await rest.put(
                Routes.applicationCommands(process.env.APPLICATION_ID as string),
                { body: commands },
            );

            console.log(`Successfully reloaded ${data.length} application (/) commands.`);
        } catch (error) {
            // And of course, make sure you catch and log any errors!
            console.error(error);
        }
    })()
}