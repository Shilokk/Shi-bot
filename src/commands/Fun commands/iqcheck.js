const Discord = require("discord.js");


module.exports ={
  name: "iq",
  description: "tells you how intelligent you are",
  usage:"iq",
  category:"fun",
  aliases: null,
  run: async (client,message,args) =>{
    const SUPER_EMOTES = [
      ":anismart:",
      ":9744_Smart_Orange:",
      ":8091_really:",
      ":7506_feelssmartman:",
      ":7206_galaxy_grain:",
      ":7175_intslNagatoroSmart: ",
      ":5831_bean_anime_glasses:",
      ":2277_5Head:",
      ":4258_WeSmartHeadOnly:",
      ":nerd:",
      ":1049_WeSmartNY:",
      ":thumbsup:"
    ];

    const AVG_IQ = 100;
    const ABOVE_AVG_IQ = 120;
    const SUPER_IQ = 200;
    const INSANE_IQ = 300;
    
    function createEmbed(desc) {
      return new Discord.MessageEmbed().setDescription(desc).setColor("RANDOM");
    }
    
    function randomSuperEmote() {
      return SUPER_EMOTES[Math.floor(Math.random() * SUPER_EMOTES.length)];
    }
        
            let val = Math.floor(Math.random() * 300) + 1;
            
            let iqMsg = `your iq is`;

            let BELOW_AVG_MSG = `${val.toString()} being this dumb should not be allowed :no_entry:`;
            let AVG_MSG = `${val.toString()} atleast your not below average :thumbsup:`;
            let ABOVE_AVG_EMOTE = `${val.toString()} your brain must be very large`;
            let INSANE_IQ_MSG = `${val.toString()} I couldn't think of another message so feel good`
    
            if(val <= AVG_IQ) {
              message.channel.send(createEmbed(iqMsg + ", " + BELOW_AVG_MSG).setImage("https://i.imgflip.com/1lgr72.jpg"));
            } else if(val <= ABOVE_AVG_IQ) {
              message.channel.send(createEmbed(iqMsg + ", " + AVG_MSG).setImage("https://imes.mit.edu/wp-content/uploads/2019/08/MIT-Brain-Swelling_0.jpg"));
            } else if( (val <= SUPER_IQ)) {
              message.channel.send(createEmbed(iqMsg + " " + ABOVE_AVG_EMOTE).setImage("https://i1.sndcdn.com/avatars-000597831615-6q438f-t500x500.jpg"));
            } else if( (val <= INSANE_IQ)) {
              message.channel.send(createEmbed(iqMsg + " " + INSANE_IQ_MSG).setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Albert_Einstein_1947.jpg/490px-Albert_Einstein_1947.jpg"));
            } else {
              message.channel.send(createEmbed(iqMsg + " " + randomSuperEmote()));

            }
        }
}    
    
  
