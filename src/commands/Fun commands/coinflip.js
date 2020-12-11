module.exports ={
  name: "coinflip",
  description: "flip a coin",
  usage:"coinflip",
  category:"fun",
  aliases: null,
  run: async (client,message,args) =>{
    let random = (Math.floor(Math.random() * Math.floor(2)));
    if(random === 0) {
      message.channel.send('Heads!');
    }
    else {
      message.channel.send('Tails!');
    }
  }
}