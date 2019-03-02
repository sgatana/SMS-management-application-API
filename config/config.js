require('dotenv').config()

const development = {
    username: process.env.DB_USER, 
    password: process.env.DB_PWD,
    database: process.env.DEV_DB,
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    logging: false
  }

const test = {
  username: process.env.DB_USER, 
  password: process.env.DB_PWD,
  database: process.env.TEST_DB,
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT,
  logging: false
  }

const production = {
  username: process.env.DB_USER, 
  password: process.env.DB_PWD,
  database: process.env.PROD_DB,
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT,
  logging: false
  }

module.exports =  {
  development,
  test,
  production
}