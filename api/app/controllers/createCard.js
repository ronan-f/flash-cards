const CardService = require('../services/Card');

const createCard = async (req, res) => {
  try {
    const card = req.body;
    const userID = req.currentUser.id;
    const result = await CardService.createCard(card, userID);
    res.status(200).send(result);

  } catch (e) {
    res.status(400).send("Could not create a new card. Please check your input and try again");
    console.error(e);
  }
}

module.exports = createCard;