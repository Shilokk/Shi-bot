  const fights = require('../../data/fights.json');


module.exports ={
  name: "fight",
  description: "Fights a user.",
  usage:"fight <user>",
  category:"owo",
  aliases: null,
  run: async (client,message,args) =>{
    let user = message.mentions.users.first();
    let reason = args.slice(0).join(' ');
    if (reason.length < 1) return message.reply('You can\'t fight thin air dude, pick someone to fight.');
    if(message.mentions.users.first().id === "726392596183646260") return message.reply('Kame KAme KAME HAAAAAA. ***It dealt ∞ damage. You got demolished.*** Shi bot won');
    if(message.mentions.users.first().id === "726392596183646260") return message.reply('You can\'t fight him you pleblord.:facepalm: He will destroy you:wink:');
        message.channel.send(`${message.author.username} is fighting ${message.mentions.users.first().username} ${fights[Math.floor(Math.random() * fights.length)]}`)
    }
}
    

