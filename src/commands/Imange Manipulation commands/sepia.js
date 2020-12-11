const Canvacord = require("canvacord");
const canvacord = new Canvacord();
const { MessageAttachment } = require("discord.js");


module.exports = {
  name: "sepia",
  description: "become one with the wood",
  usage: "sepia",
  category: "imagemanipulation",
  aliases: null,
  run: async (client, message, args) => {
      let user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
      let sepia = await canvacord.sepia(user.displayAvatarURL({ format: "png", dynamic: false }));
      let attachment = new MessageAttachment(sepia, "sepia.png");
      return message.channel.send(attachment)

  }
}
