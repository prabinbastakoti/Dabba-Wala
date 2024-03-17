require('dotenv').config();
const mysql = require('mysql');

const PORT = process.env.PORT;

// Create a MySQL connection
const Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dabbawalla', // Use the name of the database you created
});

module.exports = { PORT, Connection };
