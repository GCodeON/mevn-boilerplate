
const Sequelize = require('sequelize');

const dotenv = require('dotenv');
dotenv.config();

const sql= new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {dialect: 'mysql', host: process.env.DB_HOST })

module.exports = sql;