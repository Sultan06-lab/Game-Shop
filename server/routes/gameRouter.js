const express = require('express');
const router = express.Router();
const gameConrtoller = require('../controllers/gameConrtoller');
const adminCheckMiddleware = require('../middleware/adminCheckMiddleware');


router.post('/', adminCheckMiddleware('ADMIN'), gameConrtoller.create)

router.get('/', gameConrtoller.getAll)

router.get('/:id', gameConrtoller.getOne)

module.exports = router;