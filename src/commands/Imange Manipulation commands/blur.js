const Canvacord = require("canvacord");
const canvacord = new Canvacord();
const { MessageAttachment } = require("discord.js");


module.exports = {
  name: "blur",
  description: "get blurred lol",
  usage: "blur",
  category: "imagemanipulation",
  aliases: null,
  run: async (client, message, args) => {
      let user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
      let blur = await canvacord.blur(user.displayAvatarURL({ format: "png", dynamic: false }));
      let attachment = new MessageAttachment(blur, "blur.png");
      return message.channel.send(attachment)

  }
}
