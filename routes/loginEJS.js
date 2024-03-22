const { loginEJS, getLoginView } = require('../controllers/loginEJS');

const router = require('express').Router();

router.get('/', getLoginView);
router.post('/', loginEJS);

module.exports = router;
