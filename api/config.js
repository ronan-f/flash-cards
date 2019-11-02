require('dotenv').config()

module.exports = {
  database: {
    user: process.env.DB_USER,
    name: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
  }
};