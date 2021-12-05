'use strict'
const mysql = require('mysql');
module.exports = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  port: '3306',
  database: 'garantia',
  multipleStatements: true,
  connectionLimit: 1
});