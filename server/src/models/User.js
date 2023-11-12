const { DataTypes } = require('sequelize')
const sequelize = require('../lib/db')

const User = sequelize.define(
  'users',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    fullname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { timestamps: false }
)

module.exports = User
