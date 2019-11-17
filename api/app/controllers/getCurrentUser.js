const getCurrentUser = async (req, res) => {
  try {
    const { currentUser } = req;
    res.status(200).json(currentUser);
  } catch (e) {
    console.error(e);
    res.status(403).send("Oops! Couldn't sign in. Please check your credentials and try again.");
  }
}

module.exports = getCurrentUser;