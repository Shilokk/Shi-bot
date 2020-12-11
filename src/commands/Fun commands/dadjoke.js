const dadjoke = require('../../data/dadjokes.json');

module.exports ={
    name: "dadjoke",
    description: "Sends a Horible dad joke that makes you cringe.",
    usage:"dadjoke",
    category:"fun",
    aliases: null,
    run: async (client,message,args) =>{
        args = args.join(" ");
        message.channel.send(`${dadjoke[Math.floor(Math.random() * dadjoke.length)]}`);
    }
}