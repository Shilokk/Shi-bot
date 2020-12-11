const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, default_prefix } = require("../../data/config.json");
if (default_prefix === null) Prefix = `s!`;


module.exports ={
  name: "help",
  description: "Displays all the commands",
  usage:"help",
  category:"help",
  aliases: ["h"],
  run: async (client,message,args) =>{
    let cmdadmin = client.commands.filter(command => command.category === "admin").array();
    let cmdanimals = client.commands.filter(command => command.category === "animals").array();
    let cmdanime = client.commands.filter(command => command.category === "anime").array();
    let cmdfun = client.commands.filter(command => command.category === "fun").array();
    let cmdimage = client.commands.filter(command => command.category === "imagemanipulation").array();
    let cmdinfo = client.commands.filter(command => command.category === "info").array();
    let cmdmod = client.commands.filter(command => command.category === "moderation").array();
    let cmdnsfw = client.commands.filter(command => command.category === "nsfw").array();
    let cmdowo = client.commands.filter(command => command.category === "owo").array();
    let cmdutil = client.commands.filter(command => command.category === "utility").array();

    let embedhelp = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${client.user.username} Help Section!`)
      .addField("This is displaying the default prefix but if you ran the prefix command and changed the prefix it will be different")
      .setDescription(`Please Use ${default_prefix}help <Command Name> For More Command Information!`)
      .addField(`${default_prefix}help fun`, `Get Fun Category Commands!`)
      .addField(`${default_prefix}help moderation`, `Get moderation Category Commands!`)
      .addField(`${default_prefix}help owo`, `Get utility Category Commands!`)
      .addField(`${default_prefix}help nsfw `, `Get owo Category Commands!`)
      .addField(`${default_prefix}help imagemanipulation`, `Get imagemanipulation Category Commands!`)
      .addField(`${default_prefix}help anime`, `Get anime Category Commands!`)
      .addField(`${default_prefix}help animals`, `Get animals Category Commands!`)
      .addField(`${default_prefix}help admin`, `Get admin Category Commands!`)
      .addField(`${default_prefix}help utility`, `Get utility Category Commands!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();


    let funembed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Fun Section!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();
    let imagemanipulationembed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Image manipulation Section!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();
      let nsfwmembed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`nsfw Section!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();
      let owombed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`OwO Section!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();
      let utilembed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Utility Section!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();
      let animeembed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Anime Section!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();
      let animalembed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Animal Section!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();
      let adminembed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Admin Section!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();
      let modembed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Moderation Section!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();
      let infoembed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Info Section!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();


    cmdadmin.forEach((cmd) => {
      adminembed.addField(
        `${cmd.name}`,
        `${cmd.description}`
      )
    });

    cmdanimals.forEach((cmd) => {
      animalembed.addField(
        `${cmd.name}`,
        `${cmd.description}`
      )
    })
    cmdanime.forEach((cmd) => {
      animeembed.addField(
        `${cmd.name}`,
        `${cmd.description}`
      )
    })
    cmdfun.forEach((cmd) => {
      funembed.addField(
        `${cmd.name}`,
        `${cmd.description}`
      )
    })
    cmdimage.forEach((cmd) => {
      imagemanipulationembed.addField(
        `${cmd.name}`,
        `${cmd.description}`
      )
    })
    cmdinfo.forEach((cmd) => {
      infoembed.addField(
        `${cmd.name}`,
        `${cmd.description}`
      )
    })
    cmdnsfw.forEach((cmd) => {
      nsfwmembed.addField(
        `${cmd.name}`,
        `${cmd.description}`
      )
    })
    cmdowo.forEach((cmd) => {
      owombed.addField(
        `${cmd.name}`,
        `${cmd.description}`
      )
    })
    cmdutil.forEach((cmd) => {
      utilembed.addField(
        `${cmd.name}`,
        `${cmd.description}`
      )
    })
    cmdmod.forEach((cmd) => {
      modembed.addField(
        `${cmd.name}`,
        `${cmd.description}`
      )
    })

    
    if (!args[0]) {
      return message.channel.send(embedhelp);
    }
    if (args[0].toLowerCase() === "utility") {
      return message.channel.send(utilembed);
    }
    if (args[0].toLowerCase() === "owo") {
      return message.channel.send(owombed);
    }
    if (args[0].toLowerCase() === "nsfw") {
      return message.channel.send(nsfwmembed);
    }
    if (args[0].toLowerCase() === "moderation") {
      return message.channel.send(modembed);
    };
    if (args[0].toLowerCase() === "imagemanipulation") {
      return message.channel.send(imagemanipulationembed);
    };
    if (args[0].toLowerCase() === "fun") {
      return message.channel.send(funembed);
    };
    if (args[0].toLowerCase() === "anime") {
      return message.channel.send(animeembed);
    };
    if (args[0].toLowerCase() === "animals") {
      return message.channel.send(animalembed);
    };
    if (args[0].toLowerCase() === "admin") {
      return message.channel.send(adminembed);
    };
    if (args[0].toLowerCase() === "info") {
      return message.channel.send(infoembed);
    };


    let cmd = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(args[0].toLowerCase()));

    if (!cmd) return message.channel.send(embedhelp);

    if (`cmd.aliases` === null) cmd.aliases = `No Aliases!`;
    if (cmd.description.length === 0) cmd.description = `No Description!`;
    if (cmd.category === null) cmd.category = `No Category!`;
    if (cmd.name === null) return message.channel.send(`Something Went Wrong!`);

    let cmdhelp = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Command Information!`)
      .addField(`Name`, `${cmd.name}`)
      .addField(`Usage`, `${cmd.usage}`)
      .addField(`Aliases`, `${cmd.aliases}`)
      .addField(`Category`, `${cmd.category}`)
      .addField(`Description`, `${cmd.description}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();
    if (cmd) {
      return message.channel.send(cmdhelp);
    } else {
      return message.channel.send(embedhelp)
    }

  }
};