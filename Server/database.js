// Node modules
const Sequelize = require('sequelize');

// connect to database
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DBUSER,
  process.env.DBPASSWORD,
  {
    host: process.env.DBHOST,
    dialect: 'mysql',
    pool: {
      max: 100,
      min: 0,
      idle: 10000,
    },
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
    logging: false,
    dialectOptions: {
      multipleStatements: true,
    },
    benchmark: false,
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err);
  });

module.exports = {
  sequelize,
  Sequelize,
};
