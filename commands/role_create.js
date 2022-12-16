import fs, { readdirSync } from "fs"

export default async interaction => {

        
        //importing buttons
      const rows = await import("./buttons.js").then(m=>m.default) //importing message buttons
      const row = rows(interaction)   
        
        //getting message content
      let msg_content = `${interaction.user} has a started a vote to create a role !\n\n**Role name: **${interaction.options.get('rol_name').value}\n**Role Color: **${interaction.options.get('color').value}`
        
        
        //replying message with content and buttons
      await interaction.reply({ content: msg_content, components: [row] })  
        
        //filtering button interactions by id
      
      const filter = i => i.customId == `reject-${interaction.id}` || i.customId == `approve-${interaction.id}` 
  
      const collector = interaction.channel.createMessageComponentCollector({ filter, time: 864000000 });
  
      collector.on('collect', async i => {
         
        let roles_ids = fs.readFileSync(`./guilds_info/${interaction.guildId}.txt`,'utf-8').split("\n") // getting role_admin roles
        const user_roles = i.member.roles.member._roles //getting user roles to check if it has permissions
        
        
        if ((i.customId.startsWith("reject") || i.customId.startsWith("approve")) && !user_roles.some(item => roles_ids.includes(item))) {
          await i.reply({content:'**You have no permissions to do that**', ephemeral: true }) //if user try to click buttons and have no permission to do that, then returning message
            
        }
        
        if (i.customId.startsWith("reject") && user_roles.some(item => roles_ids.includes(item))) { //checking for reject button click and user roles to avaliable to click
          row.components[0].setDisabled(true)
          row.components[1].setDisabled(true)
          await i.update({content:`${msg_content}\n\n**REJECTED**`, components: [row]});   //then rejected the vote  
          
        }
  
  
        if (i.customId.startsWith("approve") && user_roles.some(item => roles_ids.includes(item))) { //checking for approve button click and user roles to avaliable to click
          interaction.guild.roles.create({ //creating rol by
            name: interaction.options.get('rol_name').value, //name
            color: interaction.options.get('color').value, //color
            reason: `${interaction.options.get('rol_name').value} Created by vote`,
            })
            .catch(console.error);
             
          row.components[0].setDisabled(true) //disabling buttons
          row.components[1].setDisabled(true)
          await i.update({content:`${msg_content}\n\n**APPROVED**`, components: [row]}) //sending message   
          
        }
          
        })
}