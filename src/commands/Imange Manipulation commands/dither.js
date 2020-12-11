const Canvacord = require("canvacord");
const canvacord = new Canvacord();
const { MessageAttachment } = require("discord.js");


module.exports = {
  name: "dither",
  description: "get dithered lol",
  usage: "dither",
  category: "imagemanipulation",
  aliases: null,
  run: async (client, message, args) => {
      let user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
      let dither = await canvacord.dither(user.displayAvatarURL({ format: "png", dynamic: false }));
      let attachment = new MessageAttachment(dither, "dither.png");
      return message.channel.send(attachment)

  }
}
 