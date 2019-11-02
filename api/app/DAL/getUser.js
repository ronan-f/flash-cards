const knex = require('./knex');

const getUser = async (email) => {
  return await knex('users')
    .select('*')
    .where({ email })
    .then(res => res[0])
    .catch(console.error);
};

module.exports = getUser;