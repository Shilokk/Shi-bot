const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../../data/customisation.json');



  module.exports ={
    name: "cuddle",
    description: "cuddle someone",
    usage:"cuddle <mention user>",
    category:"owo",
    aliases: null,
    run: async (client,message,args) =>{
      if (!message.mentions.users.first()) return message.reply("You need to mention someone to cuddle them");
      if (message.mentions.users.first().id == client.user.id && message.author.id !== "727513207878582292") return message.channel.send("Aww! *cuddles you* ")
      if (message.mentions.users.first().id == client.user.id && message.author.id == "727513207878582292") return message.reply(">///< *cuddles dev-san*")
      const { body } = await superagent
      .get("https://nekos.life/api/v2/img/cuddle");
      
      const embed = new Discord.MessageEmbed()
      .setColor("#ff9900")
      .setTitle(`${message.author.username} cuddled ${message.mentions.users.first().username} OwO`)
      .setImage(body.url) 
      .setFooter(`© Shi bot Bot by ${customisation.ownername}`);
      message.channel.send({embed})
  }
}








