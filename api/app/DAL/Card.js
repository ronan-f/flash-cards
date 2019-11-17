class Card {
  constructor(dbClient) {
    this.dbClient = dbClient;
  }

  async saveCard(word, description, imageURL, category, user_id) {
    return await this.dbClient('flash_cards')
      .insert({
        word,
        description,
        image_url: imageURL,
        category,
        difficulty: 0,
        user_id
      })
      .then(id => {
        return {
          id: id[0],
          word,
          description,
          imageURL,
          category,
          user_id
        }
      })
      .catch(e => {
        console.error(e);
        throw Error('Could not save card', e);
      });

  }

  async getCards(user_id) {
    return await this.dbClient('flash_cards')
      .select('*')
      .where({ user_id })
      .then(res => res)
      .catch(e => {
        console.error(e);
        throw Error(`Cannot find cards for user_id ${user_id}`)
      })
  }

  async getCard(id) {
    return await this.dbClient('flash_cards')
      .select('*')
      .where({ id })
      .then(res => res[0])
      .catch(e => {
        console.error(e);
        throw Error('Could not get card', e);
      });
  }

  async deleteCard(id) {
    return await this.dbClient('flash_cards')
      .where({ id })
      .del()
      .catch(e => {
        console.error(e);
        throw Error('Could not delete card', e);
      })
  }
}

module.exports = (dbClient) => new Card(dbClient);