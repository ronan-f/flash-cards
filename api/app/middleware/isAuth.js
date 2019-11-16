const jwt = require('express-jwt');
const config = require('../../config');

const getTokenFromHeader = ({ headers }, res) => {
  const { authorization } = headers;
  const tokenArray = authorization.split(' ');

  if (authorization && tokenArray[0] === 'Bearer') {
    return tokenArray[1];
  } else {
    res.status(401).send("User not auth");
  }
}

module.exports = jwt({
  secret: config.jwt.signature,
  userProperty: 'token',
  getToken: getTokenFromHeader
});