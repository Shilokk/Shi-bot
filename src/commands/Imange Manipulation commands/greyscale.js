const Canvacord = require("canvacord");
const canvacord = new Canvacord();
const { MessageAttachment } = require("discord.js");


module.exports = {
  name: "greyscale",
  description: "make yourself grey",
  usage: "greyscale",
  category: "imagemanipulation",
  aliases: null,
  run: async (client, message, args) => {
      let user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
      let greyscale = await canvacord.greyscale(user.displayAvatarURL({ format: "png", dynamic: false }));
      let attachment = new MessageAttachment(greyscale, "greyscale.png");
      return message.channel.send(attachment)

  }
}
 