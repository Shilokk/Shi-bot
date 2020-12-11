const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../../data/customisation.json');


module.exports ={
  name: "feed",
  description: "Feeds someone OwO",
  usage:"feed <mention user>",
  category:"owo",
  aliases: null,
  run: async (client,message,args) =>{
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to feed them!");
    if (message.mentions.users.first().id == client.user.id && message.author.id !== "727513207878582292") return message.channel.send("I don't eat tho")
    if (message.mentions.users.first().id == client.user.id && message.author.id == "727513207878582292") return message.reply("Baka Dev-san you know bots don't eat >///< Now give me more RAM :3")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/feed");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.mentions.users.first().username}, you got fed by ${message.author.username} OwO`)
    .setImage(body.url) 
    .setFooter(`© Shi bot Bot by ${customisation.ownername}`);
    message.channel.send({embed})
  }
}
