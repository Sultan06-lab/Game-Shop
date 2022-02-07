const {Genre} = require('../models/models')
const ApiHandlingError = require('../Error/ApiHandlingError');


class genreController {
    
    async create(req, res, next) {


        try {
            const {name} = req.body;
            const genre = await Genre.create({name})
    
            return res.json(genre)
        } catch (error) {
            next(ApiHandlingError.badRequest(error.message))
        }

    }

    async get(req, res, next) {
        try {
            const genres = await Genre.findAll()
            return res.json(genres);
        } catch (error) {
            next(ApiHandlingError.badRequest(error.message))
        }
    }

}

module.exports = new genreController();