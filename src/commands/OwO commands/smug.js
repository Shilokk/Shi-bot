const Discord = require("discord.js");
const superagent = require('superagent');
const customisation = require('../../data/customisation.json');


module.exports ={
  name: "smug",
  description: "Smugs xD",
  usage:"smug",
  category:"owo",
  aliases: null,
  run: async (client,message,args) =>{
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/smug");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setImage(body.url) 
    .setFooter(`© Shi bot Bot by ${customisation.ownername}`);
    message.channel.send({embed})
  }
}  