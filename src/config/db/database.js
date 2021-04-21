// import { Sequelize } from 'sequelize';
const Sequelize = require('sequelize');
const config = require('../env');

const sequelize = new Sequelize(
  config.db_name,
  config.db_user,
  config.db_password,
  { host: 'localhost', port: config.db_port, dialect: 'mysql' }
);
const db = { sequelize, Sequelize };

module.exports = db;
