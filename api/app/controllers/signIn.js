const UserService = require('../services/User');

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const result = await UserService.signIn(user);
    res.status(200).send(result);
  } catch (e) {
    console.error(e);
    res.status(403).send("Couldn't sign in");
  }
}

module.exports = createUser;