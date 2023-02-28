const {sequelize, DataTypes} = require("../db")

const Musician = sequelize.define('musician', {
    name: DataTypes.STRING,
    instrument: DataTypes.STRING
});

module.exports = {
    Musician
};