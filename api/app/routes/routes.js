const { signUp, root, signIn } = require('../controllers');
const validation = require('./validation');

module.exports.set = (app) => {
  app.get('/', root);
  app.post('/signup', validation.signUp, signUp);
  app.post('/signin', signIn);
}