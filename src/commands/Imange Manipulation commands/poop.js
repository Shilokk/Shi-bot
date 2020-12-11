const Canvacord = require("canvacord");
const canvacord = new Canvacord();
const { MessageAttachment } = require("discord.js");


module.exports = {
  name: "shit",
  description: "get shitted on",
  usage: "shit",
  category: "imagemanipulation",
  aliases: null,
  run: async (client, message, args) => {
      let user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
      let shit = await canvacord.shit(user.displayAvatarURL({ format: "png", dynamic: false }));
      let attachment = new MessageAttachment(shit, "shit.png");
      return message.channel.send(attachment)

  }
}
