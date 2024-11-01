// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('whatsapp-clone', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
