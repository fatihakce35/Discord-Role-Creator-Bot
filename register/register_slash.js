import {REST} from "@discordjs/rest"
import {Routes} from "discord.js"
import "dotenv/config"


const register_slash = (client,commands) => { //getting client and commands
    const rest = new REST({version:"10"}).setToken(process.env.token) //creating a rest
    const guild_id= client.guilds.cache.map(m=>m.id) //getting guild_id
    try {
        console.log('Started refreshing application (/) commands.')
        rest.put(Routes.applicationGuildCommands(client.user.id, client.guilds.cache.map(m=>m.id)), { //registering slash commands
          body: commands,
        })
        
      } catch (e) { // if error, then console log
        console.log(e)
}
    }





export default register_slash //exporting register_slash function