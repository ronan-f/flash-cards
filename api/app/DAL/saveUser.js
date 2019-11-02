const knex = require('./knex');

const addUser = async (user) => {
  await knex('users')
    .insert(user)
    .catch(console.error);
};

module.exports = addUser;