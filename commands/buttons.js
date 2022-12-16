import {ActionRowBuilder, ButtonBuilder,ButtonStyle} from "discord.js"

export default function(interaction) {

    
    return new ActionRowBuilder()
.addComponents(
    new ButtonBuilder()

        .setCustomId(`reject-${interaction.id}`)
        .setLabel('Reject it')
        
        
        .setStyle(ButtonStyle.Danger)
        .setDisabled(false)

)
.addComponents(
    new ButtonBuilder()
    

        .setCustomId(`approve-${interaction.id}`)
        .setLabel('Approve')
        .setStyle(ButtonStyle.Success)
        .setDisabled(false)
        )
        

} 