require('dotenv').config();

const config = {
  server: {
    port: process.env.SERVER_PORT,
  },
  database: {
    url: process.env.DATABASE_URL,
  },
};

module.exports = config;
