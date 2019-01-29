const mongoose = require('mongoose');

const user = {
  firstname: String,
  lastname: String,
  email: String,
};

module.exports = mongoose.model('user', user);
