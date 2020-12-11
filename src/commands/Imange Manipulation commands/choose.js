const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "color",
    description: "make your avatar a specific color using a hex code",
    category: "imagemanipulation",
    usage: "color <hex>",
    aliases: null,
    run: async(client, message, args) => {
            if(!args[0] || args[0] === 'help') return message.reply("Please provide a valid hex code without the #")
            var isOk = /^[0-9A-F]{6}$/i.test(args[0])
            if (isOk === false) return message.reply("Please provide a valid hex code without the #")
            const url = `https://api.no-api-key.com/api/v1/customify?image=${message.author.displayAvatarURL({ format: 'png' })}&color=${args[0]}`
            const embed = new MessageEmbed()
              .setImage(url)
            message.channel.send(embed)
         
    }
}