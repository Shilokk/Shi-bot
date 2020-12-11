const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../../data/customisation.json');


  module.exports ={
    name: "owoify",
    description: "OwO-ify a message",
    usage:"owoify",
    category:"owo",
    aliases: null,
    run: async (client,message,args) =>{
      if (!args[0]) return message.reply("You need to input a sentence to OwOify")
      const { body } = await superagent
      .get("https://nekos.life/api/v2/owoify?text=" + args.join('%20'));
      
      
      message.channel.send(body.owo)
  }
}