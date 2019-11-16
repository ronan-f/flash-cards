const { signUp, root, signIn } = require('./controllers');

module.exports.set = (app) => {
  app.get('/', root);
  app.post('/signup', signUp);
  app.post('/signin', signIn);
}