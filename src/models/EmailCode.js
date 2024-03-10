const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Emailcode = sequelize.define('emailCode', {
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // UserId
});

module.exports = Emailcode;