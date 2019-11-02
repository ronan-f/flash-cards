const knex = require('../knex');

const addUser = async (req, res) => {
  await knex('users')
    .insert(req.body)
    .catch(console.error);

  res.status(200).send();
}

module.exports = addUser;