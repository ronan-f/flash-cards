const { saveUser } = require('../DAL');

const addUser = async (req, res) => {
  const user = req.body;
  await saveUser(user);
  res.status(200).send("Success");
}

module.exports = addUser;