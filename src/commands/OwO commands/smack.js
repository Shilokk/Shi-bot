module.exports ={
  name: "smack",
  description: "Smacks a user.",
  usage:"smack <user>",
  category:"owo",
  aliases: null,
  run: async (client,message,args) =>{
    let user = message.mentions.users.first();
    let reason = args.slice(0).join(' ');
    if (reason.length < 1) return message.reply('You can\'t smack thin air you baka!');
    if(message.mentions.users.first().id === "726392596183646260") return message.reply('You can\'t hurt him you pleblord.');
    if(message.mentions.users.first().id == client.user.id && message.author.id !== "726392596183646260") return message.reply('You can\'t hurt me you pleblord.');
    if(message.mentions.users.first().id == client.user.id && message.author.id == "726392596183646260") return message.reply('Nuuuuuuuuuu that hurts ;-;');
    message.channel.send(`${message.author.username} smacked ${message.mentions.users.first().username}.`)
    }
}
