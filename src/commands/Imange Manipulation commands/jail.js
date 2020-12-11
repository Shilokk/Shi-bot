const Canvacord = require("canvacord");
const canvacord = new Canvacord();
const { MessageAttachment } = require("discord.js");


module.exports = {
  name: "jail",
  description: "insert your avatar into jail",
  usage: "jail",
  category: "imagemanipulation",
  aliases: null,
  run: async (client, message, args) => {
      let user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
      let jail = await canvacord.jail(user.displayAvatarURL({ format: "png", dynamic: false }));
      let attachment = new MessageAttachment(jail, "jail.png");
      return message.channel.send(attachment)

  }
}
 