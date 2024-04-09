const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const EmailCode = sequelize.define('modelName', {
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = EmailCode;