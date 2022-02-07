const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreConrtoller');
const adminCheckMiddleware = require('../middleware/adminCheckMiddleware');

router.post('/', adminCheckMiddleware('ADMIN'), genreController.create)

router.get('/', genreController.get)

module.exports = router;