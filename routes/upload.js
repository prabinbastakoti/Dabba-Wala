const { uploadPhoto } = require('../controllers/upload');
const middleware = require('../utils/middleware');

const router = require('express').Router();

router.post('/', middleware.photosMiddleware.single('file'), uploadPhoto);

module.exports = router;
