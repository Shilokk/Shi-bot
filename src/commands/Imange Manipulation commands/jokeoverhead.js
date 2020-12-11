const Canvacord = require("canvacord");
const canvacord = new Canvacord();
const { MessageAttachment } = require("discord.js");


module.exports = {
  name: "jokeoverhead",
  description: "get jokeoverhead your head lol",
  usage: "jokeoverhead",
  category: "imagemanipulation",
  aliases: null,
  run: async (client, message, args) => {
      let user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
      let jokeoverhead = await canvacord.jokeoverhead(user.displayAvatarURL({ format: "png", dynamic: false }));
      let attachment = new MessageAttachment(jokeoverhead, "jokeoverhead.png");
      return message.channel.send(attachment)

  }
}
