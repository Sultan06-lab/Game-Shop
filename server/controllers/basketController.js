const {BasketGame} = require('../models/models')
const {Basket} = require('../models/models')
const ApiHandlingError = require('../Error/ApiHandlingError');


class basketController {
    
    async create(req, res, next) {

        try {
            const {gameId} = req.body;
            const game = await BasketGame.create({gameId})    
            return res.json(game)
        } catch (error) {
            next(ApiHandlingError.badRequest(error.message))
        }

    }

    async get(req, res, next) {

        try {
            let {gameId} = req.query;
            const game = await BasketGame.findOne({where: {gameId}})

            return res.json(game);
        } catch (error) {
            next(ApiHandlingError.badRequest(error.message))
        }
    }

    async delete(req, res, next) {

        try {
            let {gameId} = req.body;
            const game = await BasketGame.dropOne({where: {gameId}})

            return res.json(game);
        } catch (error) {
            next(ApiHandlingError.badRequest(error.message))
        }
    }

}



module.exports = new basketController();