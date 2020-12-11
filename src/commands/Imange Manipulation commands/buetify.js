const Canvacord = require("canvacord");
const canvacord = new Canvacord();
const { MessageAttachment } = require("discord.js");


module.exports = {
  name: "beautify",
  description: "get beautifyed lol",
  usage: "beautify",
  category: "imagemanipulation",
  aliases: null,
  run: async (client, message, args) => {
      let user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
      let beautiful = await canvacord.beautiful(user.displayAvatarURL({ format: "png", dynamic: false }));
      let attachment = new MessageAttachment(beautiful, "beautiful.png");
      return message.channel.send(attachment)

  }
}
