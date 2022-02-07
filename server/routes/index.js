const express = require('express');
const router = express.Router();


//routes
const userRouter = require('./userRouter');
const gameRouter = require('./gameRouter');
const genreRouter = require('./genreRouter');
const ratingRouter = require('./ratingRouter');
const basketRouter = require('./basketRouter');


router.use('/user', userRouter);
router.use('/game', gameRouter);
router.use('/genre', genreRouter);
router.use('/rating', ratingRouter);
router.use('/basket', basketRouter);


module.exports = router;