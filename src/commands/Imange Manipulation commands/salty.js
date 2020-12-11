const Discord = require('discord.js');
const AlexAPI = require('alexflipnote.js')
const AlexClient = new AlexAPI()

module.exports = {
    name: 'salty',
    description: 'Make your self a tad bit *salty*',
    usage: 'salty',
    category: "imagemanipulation",
    aliases: null,
    run: async(client,message,args) => {
        let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({dynamic: true, size: 2048 }) : message.author.avatarURL({ dynamic: true, size: 2048 });
        let link = await AlexClient.image.salty({image: avatar});
        const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setImage(link) 
        message.channel.send({embed});
    }
}