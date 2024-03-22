const config = require('../utils/config');
const mysql = require('mysql');

const getLoginView = async (req, res) => {
  res.render('loginform');
};

const loginEJS = async (req, res) => {
  const { email, password } = req.body;

  const query =
    'SELECT * FROM Customer WHERE email = ' +
    mysql.escape(email) +
    ' AND ' +
    'password = ' +
    mysql.escape(password);

  config.Connection.query(query, (error, result) => {
    if (error) {
      return res.status(401).json({ error });
    }
    if (result.length > 0) {
      res.cookie('data', result[0]);
      res.redirect('/homepage');
    }
  });
};

module.exports = { loginEJS, getLoginView };
