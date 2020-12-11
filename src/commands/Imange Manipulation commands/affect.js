const canvacord = require("canvacord");
const { MessageAttachment } = require("discord.js");


module.exports = {
  name: "affect",
  description: "I literally dont know anymore dude",
  usage: "affect",
  category: "imagemanipulation",
  aliases: null,
  run: async (client, message, args) => {
      let user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
      let affect = await canvacord.affect(user.displayAvatarURL({ format: "png", dynamic: false }));
      let attachment = new MessageAttachment(affect, "affect.png");
      return message.channel.send(attachment)

  }
}
