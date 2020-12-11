const mongoose = require('mongoose')
const colors = require('colors')

module.exports = client => console.log(`Im in ${client.guilds.size} guilds! and I am serving ${client.users.size}`.cyan)
mongoose.connect('mongodb+srv://Shilo1356:XiExOMqwaHYEYYgN@shibot.wiq49.mongodb.net/Shlo1356?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, usefindandModify: true  });