require('dotenv').config();
const pg = require('pg-promise')();

const config = {
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DB,
  password: process.env.DBPASSWORD
};

const db = pg(config);

export default db;
