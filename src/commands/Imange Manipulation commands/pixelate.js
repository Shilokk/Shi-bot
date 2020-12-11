const Canvacord = require("canvacord");
const canvacord = new Canvacord();
const { MessageAttachment } = require("discord.js");


module.exports = {
  name: "pixelate",
  description: "get pixelateded your lol",
  usage: "pixelate",
  category: "imagemanipulation",
  aliases: null,
  run: async (client, message, args) => {
    let user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
    let pixelate = await canvacord.pixelate(user.displayAvatarURL({ format: "png", dynamic: false }));
    let attachment = new MessageAttachment(pixelate, "pixelate.png");
    return message.channel.send(attachment)

}
}

