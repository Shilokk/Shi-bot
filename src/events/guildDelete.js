const Discord = require('discord.js')


module.exports = guild => {
    let joinlogs = client.channels.get("763529992524529694")
    let embed = new Discord.MessageEmbed()
      .setTitle("Removed out a guild.")
      .addField('Guild:', guild.name)
      .addField('Guild-ID:', guild.id)
      .setColor('RED')
      .setImage(guild.iconURL())
      joinlogs.send(embed)
}