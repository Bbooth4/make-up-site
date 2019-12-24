require('dotenv').config();
const Promise = require('bluebird');
const pg = require('pg-promise')({
  promiseLib: Promise
});

const config = {
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DB,
  password: process.env.DBPASSWORD
};

const db = pg(config);

export default db;
