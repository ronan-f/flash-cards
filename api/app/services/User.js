const { User } = require('../DAL');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const config = require('../../config');

class UserService {
  async signUp({ name, email, password }) {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userRecord = await User.saveUser(name, email, hashedPassword);
    return {
      name,
      email,
      token: this._generateJWT(userRecord)
    }
  }

  async signIn({ email, password }) {
    const userRecord = await User.getUser(email);

    if(!userRecord) {
      throw "User not found";
    }

    const isCorrectPassword = await bcrypt.compare(password, userRecord.password);

    if(!isCorrectPassword) {
      throw "Invalid password";
    }

    return {
      email,
      token: this._generateJWT(userRecord)
    }

  }

  _generateJWT({ id, email }) {
    const data = {
      email,
      id
    }

    const { signature } = config.jwt;
    const expiration = '6h';

    return jwt.sign(data, signature, { expiresIn: expiration });
  }
}

module.exports = new UserService();