const {
  registerCustomer,
  registerRestaurant,
  login,
  logout,
} = require('../controllers/auth');

const router = require('express').Router();

router.post('/registerCustomer', registerCustomer);
router.post('/registerRestaurant', registerRestaurant);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;
