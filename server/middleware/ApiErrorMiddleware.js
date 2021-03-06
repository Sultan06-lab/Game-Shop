const ApiHandlingError = require('../Error/ApiHandlingError');

module.exports = function(err, req, res, next) {
    if(err instanceof ApiHandlingError) {
        return res.status(err.status).json({message: err.message})
    }

    return res.status(500).json({message: "Непридвиденная ошибка"})
}