const Canvacord = require("canvacord");
const canvacord = new Canvacord();
const { MessageAttachment } = require("discord.js");


module.exports = {
  name: "circle",
  description: "get circleed lol",
  usage: "circle",
  category: "imagemanipulation",
  aliases: null,
  run: async (client, message, args) => {
      let user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
      let circle = await canvacord.circle(user.displayAvatarURL({ format: "png", dynamic: false }));
      let attachment = new MessageAttachment(circle, "circle.png");
      return message.channel.send(attachment)

  }
}
 