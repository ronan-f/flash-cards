module.exports = {
  signUp: (req, res, next) => {
    const user = req.body;
    const { name, email, password } = user;

    if(!name || !email || !password) {
      res.status(400).send("Please provide a name, email and password to register")
      throw Error("Users need a name, email and password to register.");
    } else {
      next();
    }
  }
}