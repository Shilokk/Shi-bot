const Canvacord = require("canvacord");
const canvacord = new Canvacord();
const { MessageAttachment } = require("discord.js");


module.exports = {
  name: "gay",
  description: "idk what to set as description so here you go",
  usage: "gay",
  category: "imagemanipulation",
  aliases: null,
  run: async (client, message, args) => {
      let user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
      let gay = await canvacord.gay(user.displayAvatarURL({ format: "png", dynamic: false }));
      let attachment = new MessageAttachment(gay, "gay.png");
      return message.channel.send(attachment)

  }
}
 