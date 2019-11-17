const cors = require('cors')
const bodyParser = require('body-parser');
const { signUp, root, signIn, getCurrentUser, createCard, deleteCard } = require('../controllers');
const validation = require('./validation');
const isAuth = require('../middleware/isAuth');
const getRequestor = require('../middleware/getRequestor');

module.exports.set = (app) => {
  app.use(cors());
  app.use(bodyParser.json());
  // Anonymous routes
  // -----------------------
  app.get('/', root);
  app.post('/signup', validation.signUp, signUp);
  app.post('/signin', validation.signIn, signIn);
  // ----------------------

  // Authenticated routes
  app.use(isAuth);
  app.use(getRequestor);
  // ----------------------
  app.get('/user', getCurrentUser);
  app.post('/cards', validation.createCard, createCard);
  app.delete('/card/:id', validation.deleteCard, deleteCard);
  // ----------------------
}