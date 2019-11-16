const fastify = require('fastify')();
const port = 3000;
const config = require('../config');
const routes = require('./routes');

fastify.register(require('fastify-cors'));
fastify.register(require('fastify-jwt'), {
  secret: config.jwt.signature
});


const start = async () => {
  await fastify.listen(port);

  console.log(`Listening on ${port} 🚀🚀🚀`);
}

start();

routes.set(fastify);

