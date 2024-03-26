const {
  getRestaurantSignupView,
  RestaurantSignupEJS,
} = require('../controllers/RestaurantSignupEJS');

const router = require('express').Router();

router.get('/', getRestaurantSignupView);
router.post('/', RestaurantSignupEJS);

module.exports = router;
