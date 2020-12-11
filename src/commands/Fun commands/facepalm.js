const Canvacord = require("canvacord");
const canvacord = new Canvacord();
const { MessageAttachment } = require("discord.js");


module.exports = {
  name: "facepalm",
  description: "get facepalmed lol",
  usage: "facepalm",
  category: "fun",
  aliases: null,
  run: async (client, message, args) => {
      let user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
      let facepalm = await canvacord.facepalm(user.displayAvatarURL({ format: "png", dynamic: false }));
      let attachment = new MessageAttachment(facepalm, "facepalm.png");
      return message.channel.send(attachment)

  }
}
 