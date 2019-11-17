const { User } = require('../DAL');

module.exports = async (req, res, next) => {
  const { email } = req.token.data.id;
  const userRecord = await User.getUser(email);

   req.currentUser = userRecord;

  if(!userRecord) {
    return res.status(401).send('User not found')
  } else {
    return next();
  }
 }