const canvacord = require("canvacord");
const { MessageAttachment } = require("discord.js");


module.exports = {
  name: "trash",
  description: "get trashed on",
  usage: "trash",
  category: "imagemanipulation",
  aliases: null,
  run: async (client, message, args) => {
      let user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
      let trash = await canvacord.trash(user.displayAvatarURL({ format: "png", dynamic: false }));
      let attachment = new MessageAttachment(trash, "trash.png");
      return message.channel.send(attachment)

  }
}
