const config = require('../utils/config');
const mysql = require('mysql');

const getRestaurantSignupView = async (req, res) => {
  res.render('restaurantSignupForm');
};

const RestaurantSignupEJS = async (req, res) => {
  const {
    name,
    email,
    location,
    number,
    hours,
    cuisine,
    delivery,
    minOrder,
    password,
  } = req.body;

  if (
    name.length < 1 ||
    email.length < 1 ||
    location.length < 1 ||
    number.length < 1 ||
    hours.length < 1 ||
    delivery.length < 1 ||
    cuisine.length < 1 ||
    minOrder.length < 1 ||
    password.length < 1
  ) {
    return res.status(401).json({ message: 'Fillup all fields' });
  }

  const query =
    'INSERT INTO Restaurant (name, email, location, phone, opening, cuisineOffered, deliveryAreas, minOrderRequirements, password) VALUES (' +
    mysql.escape(name) +
    ',' +
    mysql.escape(email) +
    ',' +
    mysql.escape(location) +
    ',' +
    mysql.escape(number) +
    ',' +
    mysql.escape(hours) +
    ',' +
    mysql.escape(delivery) +
    ',' +
    mysql.escape(cuisine) +
    ',' +
    mysql.escape(minOrder) +
    ',' +
    mysql.escape(password) +
    ');';

  config.Connection.query(query, (error, result) => {
    if (error) {
      return console.log(error);
    }
    res.redirect('/loginRestaurant');
  });
};

module.exports = { getRestaurantSignupView, RestaurantSignupEJS };
