const { MessageEmbed } = require("discord.js");

module.exports ={
    name: "eval",
    description: "eval",
    usage:"eval <command>",
    category:"Developer",
    aliases: null,
    run: async (client,message,args) =>{
        if (
            ![
                "726392596183646260"
            ].includes(message.author.id)
          )
            return message.channel.send(
              `Access has been denined \`${message.author.tag}\`. \nReason: \nDo not have correct permission.`
            );
          if (args.length < 1) return message.channel.send("`Not enough parameters`");
            options = {
              split: {
                char: "\n",
                prepend: "`" + "``js\n",
                append: "`" + "``",
              },
            };
      
          const match = args[0].match(/--(depth)=(\d+)/);
          const depth = match && match[1] === "depth" ? parseInt(match[2]) : 0;
      
          const content = args.join(" ");
          const result = new Promise((resolve) => resolve(eval(content)));
      
          return result
            .then((output) => {
              if (typeof output !== "string")
                output = require("util").inspect(output, { depth });
              if (output.includes(message.client.token))
                output = output.replace(
                  message.client.token,
                  "Lmfao you thought"
                );
              const embed = new MessageEmbed()
                .setAuthor(
                  "Evaluation",
                  "https://images-ext-1.discordapp.net/external/WbpnZpFPRaH5D9jWw_7pJ7ans87C199F7d9hh0o5DNI/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/714358684007792651/4a247643a264d5011767f8be4afff68b.png"
                )
                .setTitle("Code Success")
                .setColor("#8908f0")
                .setDescription(
                  `📤Input \n \`\`\`${args[0]}\`\`\`` +
                    "📥Output \n" +
                    "`" +
                    "``js\n" +
                    output +
                    "`" +
                    "``",
                  options
                );
              message.channel.send(embed);
            })
            .catch((err) => {
              if (err.stack.includes(message.client.token))
                err.stack = err.stack.replace(
                  message.client.token,
                  "Go to the dev portal k thx...."
                );
              const embed1 = new MessageEmbed()
                .setTitle("Eval Failed | Error")
                .setColor("#ff0000")
                .setDescription("`" + "``js\n" + err.stack + "`" + "``", options);
              message.channel.send(embed1);
            });
        },
      };
      