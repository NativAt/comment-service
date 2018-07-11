const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const compression = require('compression');

app.use(compression());

const commentsRoute = require('./routes/comments');
const commentService = require('./services/comments');


app.use(bodyParser.json());
app.use(cors());

const errorHandler = (err, req, res, next) => {
  return res.status(500).json({ error: `Internal server error: ${err}` });
};

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection', { reason, promise });
});

process.on('uncaughtException', (err) => {
  console.log('whoops! There was an uncaught error', err);
});

const start = (db) => {
  commentsRoute(app, commentService(db));
  const server = app.listen(8080, () => console.log('server is listening on port 8080!'));
  app.use(errorHandler);
  return server;
};


module.exports = start;
