const Discord = require('discord.js');
const customisation = require('../../data/customisation.json');



module.exports ={
  name: "amiajoke",
  description: "Am I A Joke to You?",
  usage:"<amiajoke>",
  category:"imagemanipulation",
  aliases: null,
  run: async (client,message,args) =>{
    let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
    let link = `https://api.alexflipnote.dev/amiajoke?image=${avatar}`
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setImage(link) 
    message.channel.send({embed});
  }
  }
  