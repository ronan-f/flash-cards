const saveUser = require('../DAL/saveUser');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class UserService {
  async signUp({ name, email, password }) {

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await saveUser(name, email, hashedPassword);

    return {
      name,
      email
    }
  }
}

module.exports = new UserService();