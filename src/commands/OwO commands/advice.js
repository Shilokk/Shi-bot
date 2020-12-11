const request = require('superagent');



module.exports ={
    name: "advice",
    description: "Sends Life Advice",
    usage:"<advice>",
    category:"owo",
    aliases: null,
    run: async (client,message,args) =>{
        request
        .get('http://api.adviceslip.com/advice')
        .end((err, res) => {
            if (!err && res.status === 200) {
                try {
                    JSON.parse(res.text)
                } catch (e) {
                    return message.channel.send('An api error occurred.');
                }
                const advice = JSON.parse(res.text)
                message.channel.send(advice.slip.advice)
            } else {
            console.error(`REST call failed: ${err}, status code: ${res.status}`)
            }
        });
}

}
    
    
