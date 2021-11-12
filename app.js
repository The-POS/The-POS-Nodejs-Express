const express = require('express');
require('dotenv').config();

const middlewares = require('./middlewares/index');
const multParse = require('./middlewares/multer');
const sequelize = require('./config/database');
const models = require('./models/index');

const app = express();

middlewares(app);

// called when any endpoint throw error
app.use((error, req, res, next) => {
  console.log(error);
  const statusCode = error.statusCode || 500;
  const message = error.message;
  res.status(statusCode).json({
    message: message,
    data: error.data,
  });
});

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    app.listen(8080);
  })
  .catch(err => {
    console.log(err);
  });
