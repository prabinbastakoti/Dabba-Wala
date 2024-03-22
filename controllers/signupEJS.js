const config = require('../utils/config');
const mysql = require('mysql');

const getSignupView = async (req, res) => {
  res.render('signupform');
};

const signupEJS = async (req, res) => {
  const { name, email, number, delivery, cuisine, restriction, password } =
    req.body;

  if (
    name.length < 1 ||
    email.length < 1 ||
    number.length < 1 ||
    delivery.length < 1 ||
    cuisine.length < 1 ||
    restriction.length < 1 ||
    password.length < 1
  ) {
    return res.status(401).json({ message: 'Fillup all fields' });
  }

  const query =
    'INSERT INTO Customer (fullName, email, phone, delivery, cuisineType, dietaryRestrictions, password) VALUES (' +
    mysql.escape(name) +
    ',' +
    mysql.escape(email) +
    ',' +
    mysql.escape(number) +
    ',' +
    mysql.escape(delivery) +
    ',' +
    mysql.escape(cuisine) +
    ',' +
    mysql.escape(restriction) +
    ',' +
    mysql.escape(password) +
    ');';

  config.Connection.query(query, (error, result) => {
    if (error) {
      return console.log(error);
    }
    res.redirect('/loginform');
  });
};

module.exports = { signupEJS, getSignupView };
