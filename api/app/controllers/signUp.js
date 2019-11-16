const UserService = require('../services/User');

const signUp = async (req, res) => {
  try {
    const user = req.body;
    const result = await UserService.signUp(user);
    res.status(200).send(result);

  } catch (e) {
    res.status(400).send(e);
    console.error(e);
  }
}

module.exports = signUp;