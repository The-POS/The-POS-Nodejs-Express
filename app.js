const express = require('express');
 
const middlewares = require('./middlewares/index');
const multParse = require('./middlewares/multer');

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

app.listen(8080);
module.exports = app; // for testing
