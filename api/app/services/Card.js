const { Card } = require('../DAL');

class CardService {
  async createCard({ word, description, imageURL, category }) {
    return await Card.saveCard(word, description, imageURL, category);
  }

};

module.exports = new CardService();