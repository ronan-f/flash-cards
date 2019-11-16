const knex = require('./knex');

const saveUser = async (name, email, hashedPassword) => {

  if(!name || !email || !hashedPassword) {
    throw Error("Users need a name, email and password to be saved.");
  }

  await knex('users')
    .insert({
      name,
      email,
      password: hashedPassword
    })
    .catch(console.error);
};

module.exports = saveUser;