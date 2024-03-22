const mysql = require('mysql');
const customer = require('./model/Customer');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

con.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
  con.query('CREATE DATABASE dabbawalla', function (err, result) {
    if (err) throw err;
    console.log('Database created');
    const connect = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'dabbawalla', // Use the name of the database you created
    });
    connect.query(customer, function (err, result) {
      if (err) throw err;
      console.log('Customer Table created');
    });
  });
});
