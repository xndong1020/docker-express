// get the client
const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'pass',
  database: 'xz',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// now get a Promise wrapped instance of that pool
const promisePool = pool.promise();

module.exports = promisePool