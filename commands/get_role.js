import {PermissionsBitField} from "discord.js"

export default async interaction => {
    let perm = PermissionsBitField.Flags //getting perm element
    const perm_list = [perm.Administrator, perm.BanMembers, perm.KickMembers, perm.ManageChannels, perm.ManageGuild, perm.ManageMessages, perm.ManageRoles, perm.ModerateMembers, perm.ViewGuildInsights, perm.MuteMembers, perm.DeafenMembers, perm.MoveMembers]
    /*
    here we made a list of perms that we don't want to see in role list. if user try to get any role that has these perms, It returns false.
    Because We shouldn't give to user very important perms.
    Every role is turning a everyone role because of this.

    */
    let myRole = interaction.guild.roles.cache.get(interaction.options.get("role").value) //getting role by id
    if (perm_list.every(element => myRole.permissions.has(element) == false)) { //checking role perems
      interaction.reply("You got the role ! " + "<@&" + myRole + ">") // repyling user !
      interaction.member.roles.add(myRole) //adding user the role !
    }
    else {
      interaction.reply("**You can't get this role because of permissions**") //permission error
    }
}