const cors = require('cors')
const bodyParser = require('body-parser');
const { signUp, root, signIn } = require('../controllers');
const validation = require('./validation');
const isAuth = require('../middleware/isAuth');

module.exports.set = (app) => {
  app.use(cors());
  app.use(bodyParser.json()); 
  // Anonymous routes
  // -----------------------
  app.get('/', root);
  app.post('/signup', validation.signUp, signUp);
  app.post('/signin', signIn);
  // ----------------------

  app.use(isAuth);
  // Authenticated routes
  // ----------------------
  // ----------------------
}