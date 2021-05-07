const sequelize = require('sequelize')
require('dotenv/config')

const connection = new sequelize(
    process.env.DATABASE,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: 'localhost',
        dialect: 'postgres',
        logging: false, 
    }
)

module.exports = connection

