const fetch = require('node-fetch')
const { MessageEmbed }= require('discord.js')

module.exports = {
    name: "clyde",
    description: "makes clyde say something",
    category: "imagemanipulation",
    usage: "[text]",
    aliases: null,
    run: async(client, message, args) => {
        const text = args.slice(0).join(" ")
        if(!text) return message.channel.send("you need some text there")
        fetch(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`)
        .then((res) => res.json())
        .then((body) => {
            console.log(body)
            let embed = new MessageEmbed()
            .setImage(body.message)
            .setColor("RANDOM")
            message.channel.send(embed)
        })
        
    }
}