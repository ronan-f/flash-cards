const fastify = require('fastify')();
const port = 3000;

const start = async () => {
  await fastify.listen(port);
  console.log(`Listening on ${port} 🚀🚀🚀`);
}

start();

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
});
