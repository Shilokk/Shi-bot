const { MessageEmbed } = require('discord.js')


module.exports = guild => {
  const channel = guild.channels.find(channel => channel.type === 'text')
  if(!channel)
    let embed = new MessageEmbed()
    .setTitle("Hey cuties its me Shi bot")
    .setDescription('To get started type s!help to view all the commands, keep in mind the prefix is customizable')
    .addField('Support', '[Support server](https://discord.gg/fjrv25r) - Here you can report bugs with the bot or get support and, just talk in the main chat')
    .addField('Invite the bot', '[Invite](https://discord.com/api/oauth2/authorize?client_id=727513207878582292&permissions=1413848087&scope=bot) - Invite the bot so it can do can do cool stuffs in another user')
    .addField('Shibot website', '[website](https://www.shibot.ml) - The bot website where you can view all the cool stuff such as the stats and info on the bot (keep in mind almost nothing their is complete!)')
    .setFooter("Enjoy using Shibot")
    .setColor(0x00FFFF)
    channel.send(embed)
  }

