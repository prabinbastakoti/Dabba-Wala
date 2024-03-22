const { signupEJS, getSignupView } = require('../controllers/signupEJS');

const router = require('express').Router();

router.get('/', getSignupView);
router.post('/', signupEJS);

module.exports = router;
