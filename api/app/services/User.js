const saveUser = require('../DAL/saveUser');
const getUser = require('../DAL/getUser');
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
      token: "Success"
    }

  }
}

module.exports = new UserService();