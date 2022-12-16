import {PermissionsBitField} from "discord.js"

export default async interaction => {
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        interaction.reply({content:'**You have no permissions to do that. Please get "Administrator permission**', ephemeral: true })
      }
      const write_func = await import("../guilds_info/write_func.js").then(m=>m.default)
      write_func(interaction)
      if (write_func) {
        interaction.reply("Roles has been saved !")
      }
      else {
        interaction.reply("There is an error While saving roles")
      }
}