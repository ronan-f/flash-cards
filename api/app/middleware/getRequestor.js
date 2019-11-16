const getUser = require('../DAL/getUser');

module.exports = async (req, res, next) => {
  const { email } = req.token;
  const userRecord = await getUser(email);

   req.currentUser = userRecord;

  if(!userRecord) {
    return res.status(401).end('User not found')
  } else {
    return next();
  }
 }