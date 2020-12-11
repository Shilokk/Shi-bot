const fetch = require('node-fetch')
const { MessageEmbed }= require('discord.js')

module.exports = {
    name: "trumptweet",
    description: "makes trump say something",
    category: "imagemanipulation",
    usage: "trumptweet [text]",
    aliases: null,
    run: async(client, message, args) => {
        const text = args.slice(0).join(" ")
        if(!text) return message.channel.send("you need some text there")
        fetch(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${text}`)
        .then((res) => res.json())
        .then((body) => {
            let embed = new MessageEmbed()
            .setImage(body.message)
            .setColor("RANDOM")
            message.channel.send(embed)
        })
        
    }
}