const Canvacord = require("canvacord");
const canvacord = new Canvacord();
const { MessageAttachment } = require("discord.js");


module.exports = {
  name: "rip",
  description: "get dieded",
  usage: "rip",
  category: "imagemanipulation",
  aliases: null,
  run: async (client, message, args) => {
      let user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
      let rip = await canvacord.rip(user.displayAvatarURL({ format: "png", dynamic: false }));
      let attachment = new MessageAttachment(rip, "rip.png");
      return message.channel.send(attachment)

  }
}
