const fastify = require('fastify')();
const port = 3000;
const { createUser, root } = require('./controllers');

const start = async () => {
  await fastify.listen(port);
  console.log(`Listening on ${port} 🚀🚀🚀`);
}

start();

fastify.get('/', root);
fastify.post('/user', createUser);