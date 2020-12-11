const { ShardingManager } = require('discord.js')
const { token } = require('./data/config.json')

const manager = new ShardingManager("./src/index.js", {
    token,
    totalShards: 2
})

manager.spawn();
manager.on("shardCreate", shard => console.log(`Shard #${shard.id} is online.`))