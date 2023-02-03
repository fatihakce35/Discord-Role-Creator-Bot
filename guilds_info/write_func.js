import fs from "fs"
export default interaction => {
    const guild_id = interaction.guildId
    let role1_id = interaction.options.get("roles1").value //getting role_admin command options.
    let role2_id = interaction.options.get("roles2")
    let role3_id = interaction.options.get("roles3")

    fs.writeFile(`./guilds_info/${guild_id}.txt`,role1_id.replace("\r",""), err=> {if(err){return false}}) // first options is required. So, we're directly writing to txt file
    if (role2_id != null) {
      fs.appendFile(`./guilds_info/${guild_id}.txt`,`\n${role2_id.value.replace("\r","")}`, err=> {if (err){return false}})

    } // 2nd and 3rd options is optional, so we have to check they filled or not
    
    if (role3_id != null) {
      fs.appendFile(`./guilds_info/${guild_id}.txt`,`\n${role3_id.value.replace("\r","")}`, err=> {if (err){return false}})

    }
    return true
}