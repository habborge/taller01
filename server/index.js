const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.json({
    message: 'Hello hab let´s do it',
  });
});

// No route found handler
app.use((req, res, next) => {
  res.status(404);
  res.json({
    message: 'Error. Route not found',
  });
});

app.use((err, req, res, next) => {
  const {
    statusCode = 500,
      message,
  } = err;

  res.status(statusCode);
  res.json({
    message,
  });
});

module.exports = app;
