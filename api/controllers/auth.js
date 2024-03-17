const config = require('../utils/config');

const registerCustomer = async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;
  const query =
    'INSERT INTO Customer (firstName, lastName, username, email, password) VALUES (' +
    mysql.escape(firstName) +
    ',' +
    mysql.escape(lastName) +
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
  const { name, username, contact, password } = req.body;
  const query =
    'INSERT INTO Restaurant (name, username, contact, password) VALUES (' +
    mysql.escape(name) +
    ',' +
    mysql.escape(username) +
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

const loginCustomer = async (req, res) => {
  const { username, password } = req.body;
  const query =
    'SELECT * FROM Customer WHERE username = ' +
    mysql.escape(username) +
    ' AND ' +
    'password = ' +
    mysql.escape(password);

  config.Connection.query(query, (error, result) => {
    if (error) {
      return res.status(401).json({ error });
    }
    res.status(200).json({
      message: 'login Customer Successful !!',
      result,
    });
  });
};

const loginRestaurant = async (req, res) => {
  const { username, password } = req.body;
  const query =
    'SELECT * FROM Restaurant WHERE username = ' +
    mysql.escape(username) +
    ' AND ' +
    'password = ' +
    mysql.escape(password);

  config.Connection.query(query, (error, result) => {
    if (error) {
      return res.status(401).json({ error });
    }
    res.status(200).json({
      message: 'login Restaurant Successful !!',
      result,
    });
  });
};

const logout = async (req, res) => {
  res.status(200).json({ message: 'Logout Successfully!!' });
};

module.exports = {
  registerCustomer,
  registerRestaurant,
  loginCustomer,
  loginRestaurant,
  logout,
};
