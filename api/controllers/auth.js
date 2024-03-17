const config = require('../utils/config');
const mysql = require('mysql');

const registerCustomer = async (req, res) => {
  const { firstName, lastName, accountType, username, email, password } =
    req.body;

  if (
    (firstName.length < 1 ||
      lastName.length < 1 ||
      username.length < 1 ||
      email.length < 1,
    password.length < 1)
  ) {
    return res.status(401).json({ message: 'Fillup all fields' });
  }

  const query =
    'INSERT INTO Customer (firstName, lastName, accountType, username, email, password) VALUES (' +
    mysql.escape(firstName) +
    ',' +
    mysql.escape(lastName) +
    ',' +
    mysql.escape(accountType) +
    ',' +
    mysql.escape(username) +
    ',' +
    mysql.escape(email) +
    ',' +
    mysql.escape(password) +
    ');';

  config.Connection.query(query, (error, result) => {
    if (error) {
      return console.log(error);
    }
    res.status(201).json({
      message: 'Customer Registered!!',
      data: { ...req.body },
      result,
    });
  });
};

const registerRestaurant = async (req, res) => {
  const { name, username, accountType, contact, password } = req.body;

  if (
    name.length < 1 ||
    username.length < 1 ||
    contact.length < 1 ||
    password.length < 1
  ) {
    return res.status(401).json({ message: 'Fillup all fields' });
  }

  const query =
    'INSERT INTO Restaurant (name, username, accountType, contact, password) VALUES (' +
    mysql.escape(name) +
    ',' +
    mysql.escape(username) +
    ',' +
    mysql.escape(accountType) +
    ',' +
    mysql.escape(contact) +
    ',' +
    mysql.escape(password) +
    ');';

  config.Connection.query(query, (error, result) => {
    if (error) {
      return console.log(error);
    }
    res.status(201).json({
      message: 'Restaurant Registered!!',
      data: { ...req.body },
      result,
    });
  });
};

const login = async (req, res) => {
  const { username, password, accountType } = req.body;

  let query;

  if (accountType === 'Customer') {
    query =
      'SELECT * FROM Customer WHERE username = ' +
      mysql.escape(username) +
      ' AND ' +
      'password = ' +
      mysql.escape(password);
  } else {
    query =
      'SELECT * FROM Restaurant WHERE username = ' +
      mysql.escape(username) +
      ' AND ' +
      'password = ' +
      mysql.escape(password);
  }

  config.Connection.query(query, (error, result) => {
    if (error) {
      return res.status(401).json({ error });
    }
    if (result.length > 0) {
      return res.status(200).json({
        message: 'login Successful!!',
        result,
      });
    }
    return res.status(401).json({ message: 'User Not Found' });
  });
};

const logout = async (req, res) => {
  res.status(200).json({ message: 'Logout Successfully!!' });
};

module.exports = {
  registerCustomer,
  registerRestaurant,
  login,
  logout,
};
