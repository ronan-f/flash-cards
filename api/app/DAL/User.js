class User {
  constructor(dbClient) {
    this.dbClient = dbClient;
  }

  async getUser(email) {
    return await this.dbClient('users')
      .select('*')
      .where({ email })
      .then(res => res[0])
      .catch(console.error);
  }

  async saveUser(name, email, hashedPassword) {
    return await this.dbClient('users')
      .insert({
        name,
        email,
        password: hashedPassword
      })
      .catch(console.error);
  };
}

module.exports = (dbClient) => new User(dbClient);