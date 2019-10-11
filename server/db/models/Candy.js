const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: { notEmpty: true },
  },
  quantity: { type: Sequelize.INTEGER, validate: { min: 1, max: 10 } },
  imageURL: { type: Sequelize.STRING, defaultValue: '' },
});
