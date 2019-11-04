const fastify = require('fastify')();
const port = 3000;
const { signUp, root, signIn } = require('./controllers');

fastify.register(require('fastify-cors'));

const start = async () => {
  await fastify.listen(port);
  console.log(`Listening on ${port} 🚀🚀🚀`);
}

start();

fastify.get('/', root);
fastify.post('/signup', signUp);
fastify.post('/signin', signIn);