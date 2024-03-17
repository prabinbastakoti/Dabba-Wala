const mysql = require('mysql');
const customer = require('./model/Customer');
const restaurant = require('./model/Restaurant');
const menuItem = require('./model/MenuItem');

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
  });
  con.query(customer, function (err, result) {
    if (err) throw err;
    console.log('Customer Table created');
  });
  con.query(restaurant, function (err, result) {
    if (err) throw err;
    console.log('Restaurant Table created');
  });
  con.query(menuItem, function (err, result) {
    if (err) throw err;
    console.log('MenuItem Table created');
  });
});
