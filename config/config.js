require('dotenv').config()

const {
  DB_USERNAME,
  DB_PASS,
  DB_HOST,
  DB_NAME,
  DB_DIEALECT,
} = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": DB_DIEALECT
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": DB_DIEALECT
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": DB_DIEALECT
  }
}
