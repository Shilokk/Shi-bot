const { Client, Collection, WebhookClient, MessageEmbed } = require("discord.js-light");
const client = new Client({
  allowedMentions: { parse: [] },
  cacheGuilds: true,
  cacheChannels: false,
  cacheOverwrites: false,
  cacheRoles: false,
  cacheEmojis: false,
  cachePresences: false
})
client.config = require("./data/config.json");
const blapi = require("blapi");
const db = require('quick.db')
const apiKeys = require('./data/apikeys.json');
const axios = require('axios')
const { createCanvas, loadImage, registerFont } = require("canvas");
const path = require('path')
const request = require('node-superfetch');
const hook = new WebhookClient('765090873876021289', 'fLky6TzjwjeBnWs05LEkkcZL_4TQr2QzsgHzvJT19VdfEKwfWzC_AiAhDH7TUnEfcwOY');


{
  ["aliases", "commands"].map((x) => (client[x] = new Collection()));
  ["command", "events"].map((x) => require(`./handlers/${x}`)(client));
}


//hook embed
let embed = new MessageEmbed()
.setTitle('The bot is back online!')
.addField('The bot may go down soon for testing purposes', true)
.setColor('#00b0f4')
.setFooter('Have a good day!')
.setTimestamp();

hook.send(embed)

//random status
client.on("ready", async () => {
  const url = 'https://botlists.com/api/bot';
  const posting = await axios.post(url, {
      guild_count: client.guilds.cache.size
  }, {
      headers: {
          token: `${apiKeys.botlists}`,
          Accept: "application/json",
          "Content-Type": "application/json"
      }
  });
  blapi.handle(client, apiKeys, 3);
  blapi.setLogging(true)
  function randomStatus() {
    let status = [
      `Im in ${client.guilds.size} guilds!`,`I am serving ${client.users.size}`,`Discord Bot`,`YouTube`,`Discord`,`Visual studio code`,`Node.js`,"Twitch","Water",`Trying to unban SWAT SEAL.`,`Spamming the DMs of a random user.`,`Compiling.`,`Having a snack.`,`uncaughtException`,`Shitposting in #spam-and-shitpost.`,`Admiring egg.`,`Trying to exit vim.`,`BEING A HUMAN.`,`01001000 01100101 01101100 01110000 00100000 01001001 00100000 01100001 01101101 00100000 01100010 01100101 01101001 01101110 01100111 00100000 01101000 01100101 01101100 01100100 00100000 01101000 01101111 01110011 01110100 01100001 01100111 01100101 convert me to text`,`Hacking the FBI.`,`Serving NaN users.`,`on a Christian Server`,`et ur brokli`,`this chat gets weird fasy`,`spamming commands (s!help)`,`Error 404`,`activity not found`,`PoGGerS`,`osu! with friends`,`Hehe boay`,`Hacking neighbor's wifi password`,`Rejecting Humanity`,`ORA ORA ORA!`,`Playing with Cooking Oil`,
    ];
    let rstatus = Math.floor(Math.random() * status.length);
    // You can change the "WATCHING" into STREAMING, LISTENING, and PLAYING.
    client.user.setActivity(status[rstatus], {
      type: "STREAMING",
      url: "https://www.twitch.tv/chilledcow",
    });
    
  }
  setInterval(randomStatus, 30000); // Time in ms. 30000ms = 30 seconds. Min: 20 seconds, to avoid ratelimit.
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.user.size}" ]`);
  console.log('')
  console.log(`Channels! [ " ${client.channels.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});





client.on("guildMemberRemove", async (member) => {
  let chx = db.get(`leavechannel_${member.guild.id}`);
  if (chx === null) {
    return;
  }
  return client.channels.cache.get(chx).send(`Nooo, ${member.user.username} Left the server :(`);
});




registerFont(
  path.join(__dirname, "..", "cores", "fonts", "Heroes Legend.ttf"),
  { family: "Heroes Legend" }
);
client.on("guildMemberAdd", async (member) => {
  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {
    return;
  }
  const firstAvatarURL = member.user.displayAvatarURL({
    format: "png",
    size: 512,
    dynamic: true,
  });
  try {
    const firstAvatarData = await request.get(firstAvatarURL);
    const firstAvatar = await loadImage(firstAvatarData.body);
    const base = await loadImage(
      path.join(__dirname, ".", "cores", "img", "welcome.png")
    );
    const canvas = createCanvas(base.width, base.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(firstAvatar, -6, 35, 400, 400);
    ctx.drawImage(base, 0, 0);
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillStyle = "#40e9ff";
    ctx.font = "24px Heroes Legend";
    ctx.fillStyle = "black";
    ctx.fillText(member.user.tag, 358, 288);
    ctx.font = '18px Heroes Legend';
    ctx.fillStyle = 'white';
    ctx.fillText(member.guild.name, 408, 358)
    await client.channels.get(chx).send(`Welcome to ${member.guild.name}, ${member}`)
    await client.channels.get(chx).send({files: [{ attachment: canvas.toBuffer(), name: "Welcome.png" }]
    
    });
  } catch (err) {}
})

client.login(client.config.token);
