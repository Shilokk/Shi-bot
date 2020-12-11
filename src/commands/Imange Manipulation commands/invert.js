const Canvacord = require("canvacord");
const canvacord = new Canvacord();
const { MessageAttachment } = require("discord.js");


module.exports = {
  name: "invert",
  description: "invert your avatar",
  usage: "invert",
  category: "imagemanipulation",
  aliases: null,
  run: async (client, message, args) => {
      let user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
      let invert = await canvacord.invert(user.displayAvatarURL({ format: "png", dynamic: false }));
      let attachment = new MessageAttachment(invert, "invert.png");
      return message.channel.send(attachment)

  }
}
 