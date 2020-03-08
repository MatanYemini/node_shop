const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-course', 'root', "316386366", {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;