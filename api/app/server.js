const express = require('express')
const app = express();
const port = 3000;
const routes = require('./routes/routes');
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

routes.set(app);

const start = async () => {
  app.listen(port);
  console.log(`Listening on ${port} 🚀🚀🚀`);
}

start();


