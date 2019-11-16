const knex = require('./knex');

const saveUser = async (name, email, hashedPassword) => {
  return await knex('users')
    .insert({
      name,
      email,
      password: hashedPassword
    })
    .catch(console.error);
};

module.exports = saveUser;