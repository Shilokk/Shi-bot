const Discord = require('discord.js');

module.exports = {
    name: "f",
    description: "Press F to pay Respekt",
    usage:"f",
    category:"fun",
    aliases: null,
    async run (client, message, args) {
        if(args && args.length > 1){
            message.channel.send(`${message.author.username} has paid their respect for **${args.join(' ')}**`)
        }else{
            message.channel.send(`${message.author.username} has paid their respect `)
        }
        }
      }
