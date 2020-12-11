const Canvacord = require("canvacord");
const canvacord = new Canvacord();
const { MessageAttachment } = require("discord.js");


module.exports = {
  name: "hitler",
  description: "worse then hitler",
  usage: "greyscale",
  category: "imagemanipulation",
  aliases: null,
  run: async (client, message, args) => {
      let user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
      let hitler = await canvacord.hitler(user.displayAvatarURL({ format: "png", dynamic: false }));
      let attachment = new MessageAttachment(hitler, "hitler.png");
      return message.channel.send(attachment)

  }
}
 