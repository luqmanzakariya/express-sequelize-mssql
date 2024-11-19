const { Sequelize } = require("sequelize");
const personModel = require("../models/person");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port: process.env.SQL_PORT,
    dialect: process.env.DIALECT,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    dialectOptions: {
      options: { encrypt: false },
    },
  }
);

const db = {};
db.Person = personModel(sequelize);
// sync all models with database
sequelize.sync({ alter: true });

module.exports = db;