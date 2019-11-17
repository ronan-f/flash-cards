const { Card } = require('../DAL');

class CardService {
  async createCard({ word, description, imageURL, category }, userID) {
    return await Card.saveCard(word, description, imageURL, category, userID);
  }

  async getCard(id) {
    return await Card.getCard(id);
  }

  async deleteCard(id) {
    return await Card.deleteCard(id);
  }

};

module.exports = new CardService();