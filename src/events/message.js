const Timeout = new Set();
const { MessageEmbed, Message, Client } = require("discord.js");
const client = new Client()
const { prefix } = require("../data/config.json");
const ms = require("ms");
const db = require("../database/db");
const custom = require("../models/custom");
const Discord = require('discord.js')


/**
 * @param {Client} client
 * @param {Message} message
 */



module.exports = async (client, message) => { 

  message.channel.messages.fetch();
  if (message.author.bot) return;
  if (!message.guild) return;

  let CurrentServerPrefix = (await db.get(`Prefix_${message.guild.id}`))
  ? await db.get(`Prefix_${message.guild.id}`)
  : prefix;
  if (CurrentServerPrefix === null) CurrentServerPrefix = prefix;

  if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`)))
    return message.channel.send(
      `My Current Prefix Is : ${CurrentServerPrefix}`
    );
    
  if (message.author.bot) return;


  let newPrefix = (await db.get(`Prefix_${message.guild.id}`))
    ? await db.get(`Prefix_${message.guild.id}`)
    : prefix;
  if (!message.content.toLowerCase().startsWith(newPrefix)) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  if (!message.guild) return;
  const args = message.content.slice(newPrefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
    
  if (cmd.length === 0) return;


  if (message.author.bot) return;
  if (!message.guild) return;


  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command) {
    if (command.timeout) {
      if (Timeout.has(`${message.author.id}${command.name}`)) {
        return message.reply(
          `You can only use this command every ${ms(command.timeout)}!`
        );
      } else {
        command.run(client, message, args);
        Timeout.add(`${message.author.id}${command.name}`);
        setTimeout(() => {
          Timeout.delete(`${message.author.id}${command.name}`);
        }, command.timeout);
      }
    } else {
      command.run(client, message, args);
    }
  } else {
    custom.findOne(
      { Guild: message.guild.id, Command: cmd },
      async (err, data) => {
        if (err) throw err;
        if (data) return message.channel.send(data.Content);
        else return;
      })
  }
};