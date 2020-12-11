const Discord = require("discord.js");


module.exports ={
  name: "oof",
  description: "oof!",
  usage:"oof",
  category:"fun",
  aliases: null,
  run: async (client,message,args) =>{
    const embed = new Discord.MessageEmbed()
      .setDescription("Big oof!")
      .setColor("#66ffff");
    message.delete();

    return message.channel.send(embed);
  }
};