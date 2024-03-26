const {
  loginRestaurantEJS,
  getLoginRestaurantView,
} = require('../controllers/loginRestaurantEJS');

const router = require('express').Router();

router.get('/', getLoginRestaurantView);
router.post('/', loginRestaurantEJS);

module.exports = router;
