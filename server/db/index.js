require('dotenv').config();
const Promise = require('bluebird');
const pg = require('pg-promise')({
  promiseLib: Promise,
  // receive(data, result, e) {
  //   console.log({data, result, e})
  // }
});

const config = {
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DB,
  password: process.env.DBPASSWORD
};

const db = pg(config);

export default db;
