const config = require("../../config");

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : config.database.user,
    password : config.database.password,
    database : config.database.name
  }
});

module.exports = knex;