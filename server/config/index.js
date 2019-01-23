require('dotenv').config('');

const config = {
  server: {
    port: process.env.SERVER_PORT || 3004,
  },
};

module.exports = config;
