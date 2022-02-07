const jwt = require('jsonwebtoken');
const ApiHandlingError = require('../Error/ApiHandlingError');
const {User, Basket} = require('../models/models');
const bcrypt = require('bcrypt');

const jwtFunc = (id, email, role) => {
 return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '6h'})
}

class userConrtoller {
   
    async registration(req, res, next) {
        const {email, password, role} = req.body;
        if(!email || !password) {
            return next(ApiHandlingError.badRequest("Не правильный email или password"))
        } 
        
        const candidate = await User.findOne({where: {email}})
        if(candidate) {
            return next(ApiHandlingError.badRequest("Пользователь уже существует"))
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id});
        const token = jwtFunc(user.id, user.email, user.role);
        return res.json({token});
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        if(!email || !password) {
            next(ApiHandlingError.badRequest('Введите пароль или логин'))
        }

        const user = await User.findOne({ where: {email}})
        if(!user) {
            next(ApiHandlingError.badRequest('Пользователь не найден'))
        }

        let comparePassword = bcrypt.compareSync(password, user.password) 
        if(!comparePassword) {
            next(ApiHandlingError.badRequest('Неверный пароль'))
        }

        const token = jwtFunc(user.id, user.email, user.role);
        return res.json({token})
    }

    async auth(req, res, next) {
        const token = jwtFunc(req.user.id, req.user.email, req.user.role);
        res.json({token})
    }
}

module.exports = new userConrtoller();