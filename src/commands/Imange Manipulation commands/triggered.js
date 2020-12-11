const Canvacord = require("canvacord");
const canvacord = new Canvacord();
const { MessageAttachment } = require("discord.js");


module.exports = {
  name: "triggered",
  description: "triggereds your avatar",
  usage: "triggered",
  category: "imagemanipulation",
  aliases: null,
  run: async (client, message, args) => {
      let user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
      let triggered = await canvacord.trigger(user.displayAvatarURL({ format: "png", dynamic: false }));
      let attachment = new MessageAttachment(triggered, "triggered.gif");
      return message.channel.send(attachment)

  }
}
