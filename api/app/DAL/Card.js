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
}

module.exports = (dbClient) => new Card(dbClient);