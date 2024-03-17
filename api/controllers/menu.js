const config = require('../utils/config');
const mysql = require('mysql');

const addMenuItem = async (req, res) => {
  const { name, price, category, restaurantId } = req.body;
  const query =
    'INSERT INTO MenuItem (name, price, category, restaurantId) VALUES (' +
    mysql.escape(name) +
    ',' +
    mysql.escape(price) +
    ',' +
    mysql.escape(category) +
    ',' +
    mysql.escape(restaurantId) +
    ');';

  config.Connection.query(query, (error, result) => {
    if (error) {
      return console.log(error);
    }
    res.status(201).json({
      message: 'New Item Created!!',
      data: { ...req.body },
      result,
    });
  });
};

const getMenuItem = async (req, res) => {
  const { restaurantId } = req.body;
  const query =
    'SELECT * FROM MenuItem WHERE restaurantId = ' + mysql.escape(restaurantId);

  config.Connection.query(query, (error, result) => {
    if (error) {
      return console.log(error);
    }
    res.status(200).json({
      message: 'Menu Item Fetched Successfully!!',
      result,
    });
  });
};

const getMenuItemByItem = async (req, res) => {
  const { queryItem } = req.body;
  const query =
    'SELECT * FROM MenuItem WHERE name = ' + mysql.escape(queryItem);

  config.Connection.query(query, (error, result) => {
    if (error) {
      return console.log(error);
    }
    res.status(200).json({
      message: 'Item Fetched Successfully!!',
      result,
    });
  });
};

module.exports = { addMenuItem, getMenuItem, getMenuItemByItem };
