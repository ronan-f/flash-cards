const knex = require('./knex');
const User = require('./User')(knex);
const Card = require('./Card')(knex);

module.exports = {
  User: User,
  Card: Card
}