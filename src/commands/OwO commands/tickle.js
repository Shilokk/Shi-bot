const Discord = require("discord.js");
const superagent = require('superagent');
const customisation = require('../../data/customisation.json');


module.exports ={
  name: "tickle",
  description: "tickle someone",
  usage:"tickle <mention>",
  category:"owo",
  aliases: null,
  run: async (client,message,args) =>{
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to tickle them");
    if(message.mentions.users.first().id === "726392596183646260") return message.reply('You can\'t tickle him. He will explode on impact!');
    if (message.mentions.users.first().id == client.user.id) return message.channel.send("Nuuuuuuuuuuuuuuuuuuuuuu that tickless")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/tickle");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.mentions.users.first().username}, you got tickled by ${message.author.username}`)
    .setImage(body.url) 
    .setFooter(`© Shi bot Mod Bot by ${customisation.ownername}`);
    message.channel.send({embed})
  }
}