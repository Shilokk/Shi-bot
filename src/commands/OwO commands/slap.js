const Discord = require("discord.js");
const fetch = require("node-fetch");



module.exports ={
  name: "slap",
  description: "Slap someone!",
  usage:"slap <mention>",
  category:"owo",
  aliases: ["wack", "smack", "swat", "strike", "wallop"],
  run: async (client,message,args) =>{
    if (!message.mentions.users.first())
    return message.channel.send("Please mention a user to be slapped!");
  
  fetch("https://nekos.life/api/v2/img/slap")
    .then(res => res.json())
    .then(body => {
      if (!body)
        return message.channel.send("Whoops! I've broke, try again!");
  
      let embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} Slap!`)
        .setTitle(
          `${client.user.username} slapped ${
            message.mentions.users.first().username
          }. Owwie!`
        )
        .setImage(body.url)
        .setFooter(
          client.user.username.toUpperCase(),
          client.user.displayAvatarURL()
        );
  
      return message.channel.send(embed);
    });
  }
}