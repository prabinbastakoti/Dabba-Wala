const { getAllRestaurant } = require('../controllers/restaurant');

const router = require('express').Router();

router.get('/getAllRestaurant', getAllRestaurant);

module.exports = router;
