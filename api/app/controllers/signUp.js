const UserService = require('../services/User');

const signUp = async (req, res) => {
  try {
    const user = req.body;
    const result = await UserService.signUp(user);
    res.status(200).send(result);

  } catch (e) {
    console.error(e);
  }
}

module.exports = signUp;