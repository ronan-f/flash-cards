const { Card } = require('../DAL');

class CardService {
  async createCard({ word, description, imageURL, category }, userID) {
    return await Card.saveCard(word, description, imageURL, category, userID);
  }

};

module.exports = new CardService();