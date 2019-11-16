const knex = require('./knex');
const User = require('./User')(knex);

module.exports = {
  User: User
}