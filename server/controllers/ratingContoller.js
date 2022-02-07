const {Rating} = require('../models/models')
const ApiHandlingError = require('../Error/ApiHandlingError');


class ratingController {
    
    async create(req, res, next) {


        try {
            const {rating, userId, gameId} = req.body;
            const gameRating = await Rating.create({rating, userId, gameId})    
            return res.json(gameRating)
        } catch (error) {
            next(ApiHandlingError.badRequest(error.message))
        }

    }

    async getAll(req, res, next) {

        try {
            let {gameId} = req.query;
            const gamesRating = await Rating.findAll({where: {gameId}})

            return res.json(gamesRating);
        } catch (error) {
            next(ApiHandlingError.badRequest(error.message))
        }
    }

}

module.exports = new ratingController();