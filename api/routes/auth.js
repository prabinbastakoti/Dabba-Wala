const {
  registerCustomer,
  registerRestaurant,
  loginRestaurant,
  loginCustomer,
  logout,
} = require('../controllers/auth');

const router = require('express').Router();

router.post('/registerCustomer', registerCustomer);
router.post('/registerRestaurant', registerRestaurant);
router.post('/loginRestaurant', loginRestaurant);
router.post('/loginCustomer', loginCustomer);
router.post('/logout', logout);

module.exports = router;
