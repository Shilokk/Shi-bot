const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "darken",
    description: "darken your avatar",
    category: "imagemanipulation",
    usage: "darken",
    aliases: null,
    run: async(client, message, args) => {
        (async () => {    
            const user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
            let response, data;
            
            try {
                response = await axios.get(`https://api.no-api-key.com/api/v1/darken?image=${user.user.displayAvatarURL({format: 'png'})}`)
                data = await response.data
                console.log(data)
            } catch (e) {
                return console.log(e)
            }
            
            const embed = new MessageEmbed()
                .setImage(data.url)
            await message.channel.send(embed)
        })();
    }
}

            