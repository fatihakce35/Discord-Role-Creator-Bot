import register_slash from "../register/register_slash.js"



export default client=>{
   client.once("ready",async ()=>{ //making a client ready event
   
    const commands = await import("../commands/command_settings.js").then(m=>m.default)  //importing command_settings  
    
    register_slash(client,commands) //registering slash commands

    
    }) 
}

