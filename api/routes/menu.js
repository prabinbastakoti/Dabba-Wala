const {
  addMenuItem,
  getMenuItem,
  getMenuItemByItem,
} = require('../controllers/menu');

const router = require('express').Router();

router.post('/addMenuItem', addMenuItem);
router.get('/getMenuItem/:id', getMenuItem);
router.get('/getMenuItemByItem', getMenuItemByItem);

module.exports = router;
