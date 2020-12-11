const { MessageEmbed } = require("discord.js");

module.exports ={
    name: "id",
    description: "get the id of a user",
    usage:"id <@user>",
    category:"utility",
    aliases: null,
    run: async (client,message,args) =>{
        let embed = new MessageEmbed()
        .setColor(`RANDOM`)
        .setDescription(`The users id is: ${message.author.id}`)
        message.channel.send(embed)
        }
}