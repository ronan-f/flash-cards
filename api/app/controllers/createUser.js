const UserService = require('../services/User');

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const result = await UserService.signUp(user);
    res.status(200).send(result);

  } catch (e) {
    console.error(e);
  }
}

module.exports = createUser;