const { uuid } = require('uuidv4');
const path = require('path');
const {Game} = require('../models/models');
const ApiHandlingError = require('../Error/ApiHandlingError');


class gameConrtoller {
   
    async create(req, res, next) {
        try {
            const {name, price, genreId, description} = req.body;
            const {img} = req.files;
            let fileName = uuid() + '.jpg';
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
    
            const game = await Game.create({name, price, genreId, description, img: fileName}) 

            return res.json(game)
            
        } catch (error) {
            next(ApiHandlingError.badRequest(error.message))
        }        

    } 

    async getAll(req, res, next) {
        try {
            let {genreId, limit, page} = req.query;
            page = page || 1
            limit = limit || 9
            const offset = page * limit - limit
            if(!genreId)
            {
                const games = await Game.findAndCountAll({limit, offset})
                return res.json(games)
            }
            const games = await Game.findAndCountAll({where: {genreId}, limit, offset})
            return res.json(games);

        } catch (error) {
         next(ApiHandlingError.badRequest(error.message))   
        }
    }

    async getOne(req, res, next) {

        try {
            const {id} = req.params;
            const game = await Game.findOne({where: {id}})
            return res.json(game)
        } catch (error) {
            next(ApiHandlingError.badRequest(error.message))
        }
    }

}

module.exports = new gameConrtoller();