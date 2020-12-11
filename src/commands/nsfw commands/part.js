const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../../data/customisation.json');

module.exports ={
    name: "hentaipussyart",
    description: "pussy art....",
    usage:"hentaipussyart",
    category:"nsfw",
    aliases: null,
    run: async (client,message,args) =>{
      const { body } = await superagent
      .get("https://nekos.life/api/v2/img/pussy_jpg");
      if(!message.channel.nsfw) return message.reply("NSFW is not enabled in this channel");
      
      const embed = new Discord.MessageEmbed()
      .setColor("#ff9900")
      .setImage(body.url) 
      .setFooter(`© Shi bot Bot by ${customisation.ownername}`);
      message.channel.send({embed})
  }
}