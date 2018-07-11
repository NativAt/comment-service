// start the server with MongoDB.

const start = require('./server');

// connnect mongoose to database
const mongoose = require('mongoose');

// require mongoose
const mongoRepo = require('./repository/mongoRepository');
const mongoModels = require('./models/mongo/mongoose');

// set up default mongoose connection
const { connectionString } = require('./config');

mongoose.connect(`${connectionString}/comments`, { useNewUrlParser: true });
const db = mongoose.connection;

// bind connection to event
db.on('connected', () => {
  console.log('MongoDB connection has been established successfully.');
  const database = mongoRepo(mongoModels, 'Comment');
  start(database);
});

db.on('error', console.error.bind(console, 'mongodb connection error:'));
