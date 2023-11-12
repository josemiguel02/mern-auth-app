const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('auth_app_db', 'root', null, {
  dialect: 'mysql',
  port: 3306,
  pool: {
    min: 0,
    max: 10
  }
})

module.exports = sequelize
