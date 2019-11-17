const CardService = require('../services/Card');

const deleteCard = async (req, res) => {
  try {
    const { card_id } = res.locals;
    const userID = req.currentUser.id;
    const cardToDelete = await CardService.getCard(card_id);

    if(!cardToDelete || cardToDelete.user_id !== userID) {
      return res.status(403).send("You can only delete your own cards");
    }

    const result = await CardService.deleteCard(card_id);

    res.status(200).send(String(result));

  } catch (e) {
    res.status(400).send("Could not delete this card. Please try again.");
    console.error(e);
  }
}

module.exports = deleteCard;