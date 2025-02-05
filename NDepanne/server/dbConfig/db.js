const { Sequelize } = require("sequelize");

// Charger les variables d'environnement
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER,process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,  // Doit correspondre au nom du service dans docker-compose
  dialect: 'mysql'
});
module.exports = sequelize;
