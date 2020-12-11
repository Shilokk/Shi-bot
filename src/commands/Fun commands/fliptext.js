const flip = require('flip-text')

module.exports ={
    name: "fliptext",
    description: "flipping tex lolt",
    usage:"fliptext",
    category:"fun",
    aliases: null,
    run: async (client,message,args) =>{
        let flippedtext = flip(args.slice(1).join(" "));            message.channel.send(flippedtext);
    }
}