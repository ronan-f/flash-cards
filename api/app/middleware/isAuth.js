const jwt = require('express-jwt');
const config = require('../../config');

const getTokenFromHeader = ({ headers }) => {
  const { authorization } = headers;
  const tokenArray = authorization.split(' ');

  if (authorization && tokenArray[0] === 'Bearer') {
    return tokenArray[1];
  }
}

module.exports = jwt({
  secret: config.jwt.signature,
  userProperty: 'token',
  getToken: getTokenFromHeader
});