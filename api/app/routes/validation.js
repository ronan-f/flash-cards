module.exports = {
  signUp: (req, res, next) => {
    const user = req.body;
    const { name, email, password } = user;

    if(!name || !email || !password) {
      res.status(400).send("Please provide a name, email and password to register.")
      throw Error("Users need a name, email and password to register.");
    } else {
      next();
    }
  },

  signIn: (req, res, next) => {
    const user = req.body;
    const { email, password } = user;
    if(!email || !password) {
      res.status(400).send("Please provide an email and password to sign in.");
      throw Error("Please provide an email and password to sign in");
    } else {
      next();
    }
  },

  createCard: (req, res, next) => {
    const card = req.body;
    const { word, imageURL} = card;
    if(!word || !imageURL) {
      res.status(400).send("Please provide a word and imageURL to create a new card");
      throw Error("No word or URL provided");
    } else {
      next();
    }
  },

  deleteCard: (req, res, next) => {
    const { id } = req.params;
    if(!id) {
      res.status(400).send("No card ID provided.");
      throw Error("No card ID provided");
    } else {
      res.locals.card_id = id;
      next();
    }
  }
}