class User {
  constructor(dbClient) {
    this.dbClient = dbClient;
  }

  async getUser(email) {
    return await this.dbClient('users')
      .select('*')
      .where({ email })
      .then(res => res[0])
      .catch(e => {
        console.error(e);
        throw Error('Could not get user', e);
      });
  }

  async saveUser(name, email, hashedPassword) {
    return await this.dbClient('users')
      .insert({
        name,
        email,
        password: hashedPassword
      })
      .then(id => {
        return {
          id: id[0],
          name,
          email
        }
      })
      .catch(e => {
        console.error(e);
        throw Error('Could not save user', e);
      });
  };
}

module.exports = (dbClient) => new User(dbClient);