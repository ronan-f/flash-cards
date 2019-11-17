const { Card } = require('../DAL');

class CardService {
  async createCard({ word, description, imageURL, category }, userID) {
    return await Card.saveCard(word, description, imageURL, category, userID);
  }

  async getCard(id) {
    return await Card.getCard(id);
  }

  async getCards(user_id) {
    return await Card.getCards(user_id);
  }

  async deleteCard(id) {
    return await Card.deleteCard(id);
  }

};

module.exports = new CardService();