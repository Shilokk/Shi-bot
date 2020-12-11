const Canvacord = require("canvacord");
const canvacord = new Canvacord();
const { MessageAttachment } = require("discord.js");


module.exports = {
  name: "deepfry",
  description: "get deepfryed lol",
  usage: "deepfry",
  category: "imagemanipulation",
  aliases: null,
  run: async (client, message, args) => {
      let user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
      let deepfry = await canvacord.deepfry(user.displayAvatarURL({ format: "png", dynamic: false }));
      let attachment = new MessageAttachment(deepfry, "deepfry.png");
      return message.channel.send(attachment)

  }
}
