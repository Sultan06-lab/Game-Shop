const express = require('express');
const router = express.Router();
const ratingContoller = require('../controllers/ratingContoller');

router.post('/', ratingContoller.create)

router.get('/', ratingContoller.getAll)

module.exports = router;