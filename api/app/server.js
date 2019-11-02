const fastify = require('fastify')();
const port = 3000;
const knex = require('./knex');

const start = async () => {
  await fastify.listen(port);
  console.log(`Listening on ${port} 🚀🚀🚀`);
}

start();

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
});

fastify.post('/user', async (req, res) => {
  await knex('users')
    .insert(req.body)
    .catch(console.error);

  res.status(200).send();
})