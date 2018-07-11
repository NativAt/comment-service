// start the server with Postgres DB.

const Sequelize = require('sequelize');
const psqlRepo = require('./repository/psqlRepository');
const psqlModels = require('./models/psql/index');

const start = require('./server');

const sequelize = new Sequelize('comments', 'admin', '123456', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('PSQL connection has been established successfully.');
    const database = psqlRepo(psqlModels, 'comment');
    start(database);
  })
  .catch((err) => { throw new Error(`Unable to connect to the database:, ${err}`); });
