const config = require('../utils/config');

const getAllRestaurant = async (req, res) => {
  const query = 'SELECT * FROM restaurant;';

  config.Connection.query(query, (error, result) => {
    if (error) {
      return console.log(error);
    }
    res.status(200).json({
      message: 'Resaurant Data Received!!',
      result,
    });
  });
};

module.exports = { getAllRestaurant };
