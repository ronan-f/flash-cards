const Card = require('../services/Card');

const getCards = async (req, res) => {
  try {
    const { id } = req.currentUser;
    const cards = await Card.getCards(id);
    res.status(200).json(cards);
  } catch (e) {
    console.error(e);
    res.status(403).send("Couldn't find any cards for this user");
  }
}

module.exports = getCards;