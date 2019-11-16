const saveUser = require('../DAL/saveUser');
const getUser = require('../DAL/getUser');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const config = require('../../config');

class UserService {
  async signUp({ name, email, password }) {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userRecord = await saveUser(name, email, hashedPassword);
    return {
      name,
      email,
      token: this._generateJWT(userRecord)
    }
  }

  async signIn({ email, password }) {
    const user = await getUser(email);

    if(!user) {
      throw "User not found";
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if(!isCorrectPassword) {
      throw "Invalid password";
    }

    return {
      email,
      password,
      token: this._generateJWT(userRecord)
    }

  }

  _generateJWT(id, email, password) {
    const data = {
      id,
      email,
      password
    }

    const { signature } = config.jwt;
    const expiration = '6h';

    return jwt.sign({ data, }, signature, { expiresIn: expiration });
  }
}

module.exports = new UserService();