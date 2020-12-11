const axios = require("axios");
const { MessageEmbed } = require("discord.js");
const moment = require('moment')
const toDate = require('date-fns/toDate')

module.exports = {
  name: "corona",
  description:"get the corona virus stats of any country that has data on corona viru",
  usage: "corona <country>",
  category: "fun",
  aliases: null,
  run: async (client, message, args) => {
    const baseUrl = "https://corona.lmao.ninja/v3/covid-19";

    let url;
    let response;
    let corona;
    try {
      url = args[0] ? `${baseUrl}/countries/${args[0]}` : `${baseUrl}/all`;
      response = await axios.get(url);
      corona = response.data;
    } catch (error) {
      return message.channel.send(
        `***${args[0]}*** doesn't exist, or data isn't being collected`
      );
    }
    let result = toDate(corona.updated)
    if (corona.deathsPerOneMillion === undefined)  return('Unspecified') 
    const embed = new MessageEmbed()
      .setTitle(args[0] ? `${args[0]} Stats` : "Total Corona Cases World Wide")
      .setColor("#fb644c")
      .setThumbnail(
        args[0]
          ? corona.countryInfo.flag
          : "https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif"
      )
      .addFields(
        {
          name: "Total Cases:",
          value: corona.cases.toLocaleString(),
          inline: true,
        },
        {
          name: "Total Deaths:",
          value: corona.deaths.toLocaleString(),
          inline: true,
        },
        {
          name: "Total Recovered:",
          value: corona.recovered.toLocaleString(),
          inline: true,
        },
        {
          name: "Active Cases:",
          value: corona.active.toLocaleString(),
          inline: true,
        },
        {
          name: "Critical Cases:",
          value: corona.critical.toLocaleString(),
          inline: true,
        },
        {
          name: "Today Recoveries:",
          value: corona.todayRecovered.toLocaleString().replace("-", ""),
          inline: true,
        },
        {
          name: "Todays Deaths:",
          value: corona.todayDeaths.toLocaleString(),
          inline: true,
        },
        {
          name: "Cases per one million",
          value: corona.casesPerOneMillion.toLocaleString(),
          inline: true,
        },
        {
          name: "Deaths per one million",
          value: corona.deathsPerOneMillion.toLocaleString(),
          inline: true,
        },
        {
          name: "Tests per one million",
          value: corona.testsPerOneMillion.toLocaleString(),
          inline: true,
        },
        {
          name: "All tests",
          value: corona.tests.toLocaleString(),
          inline: true,
        },
        {
          name: "Active per one million",
          value: corona.activePerOneMillion.toLocaleString(),
          inline: true,
        },
        {
          name: "Recovered per one million",
          value: corona.recoveredPerOneMillion.toLocaleString(),
          inline: true,
        },
        {
          name: "Critical per one million",
          value: corona.criticalPerOneMillion.toLocaleString(),
          inline: true,
        },
        {
          name: "Deaths per one million",
          value: corona.deathsPerOneMillion.toLocaleString(),
          inline: true,
        },
        {
          name: "Deaths per one million",
          value: test,
          inline: true,
        },
        {
          name: "Last updated:",
          value: result,
          inline: true,
        }
      );

    message.channel.send(embed);
      }
  }

