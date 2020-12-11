const Discord = require("discord.js");


    module.exports ={
      name: "hi",
      description: "Hi",
      usage:"hi",
      category:"fun",
      aliases: null,
      run: async (client,message,args) =>{
        message.channel.send(new Discord.MessageEmbed().setDescription("Hey buddy!").setColor("RANDOM"))
      }
    }