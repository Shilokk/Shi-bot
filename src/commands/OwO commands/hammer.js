module.exports ={
  name: "hammer",
  description: "Gives you a hammer to throw at a pleb.",
  usage:"hammer <user>",
  category:"owo",
  aliases: null,
  run: async (client,message,args) =>{
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('You can\'t throw a hammer at thin air, pick someone you baka.');
    if (message.mentions.users.first().id == client.user.id) return message.channel.send(`No u, ***threws hammer at ${message.mentions.users.first().username}***`)
    if(message.mentions.users.first().id === "726392596183646260") return message.reply('You can\'t hurt him you pleblord.')
    message.channel.send(`${message.author.username} threw a hammer at ${message.mentions.users.first().username}. :hammer:`)
    }
}