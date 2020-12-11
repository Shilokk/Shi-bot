const shorten = require("isgd");



module.exports ={
    name: "shorten",
    description: "Shortens a given URL using is.gd",
    usage:"shorten <URL> [title]",
    category:"utility",
    aliases: null,
    run: async (client,message,args) =>{
        if (!args[0]) return message.channel.send("**Proper Usage: s!shorten <URL> [title]**")

        if (!args[1]) {
    
            shorten.shorten(args[0], function(res) {
                if (res.startsWith("Error:")) return message.channel.send("**Please enter a valid URL**");
                message.channel.send(`**<${res}>**`);
    
            })
    
        } else { // If the second argument IS defined, run this
    
            shorten.custom(args[0], args[1], function(res) {
    
                if (res.startsWith("Error:")) return message.channel.send(`**${res}**`);
    
                message.channel.send(`**<${res}>**`);
    
    
            })
    
        }
    
    }
}