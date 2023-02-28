const {sequelize, DataTypes} = require('../db');

const Band = sequelize.define('band', {
    name: DataTypes.STRING,
    genre: DataTypes.STRING
});

module.exports = {
    Band
};