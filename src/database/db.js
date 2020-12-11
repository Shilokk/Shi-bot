const { MongoClient } = require("salvage.db");
const db = new MongoClient({
  mongoURI: require("../data/config.json").Mongo,
  schema: {
    name: "Shilo1356",
  },
});
module.exports = db;