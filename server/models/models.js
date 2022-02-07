const sequelize = require('../config/db');
const DataTypes = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"} 
});

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketGame = sequelize.define('basket_game', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Game = sequelize.define('game', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
});

const Genre = sequelize.define('genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Rating = sequelize.define('reating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rating: {type: DataTypes.INTEGER, allowNull: false}
})
sequelize.sync();

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketGame)
BasketGame.belongsTo(Basket)

Game.hasOne(BasketGame)
BasketGame.belongsTo(Game)

Genre.hasMany(Game)
Game.belongsTo(Genre)

User.hasMany(Rating)
Rating.belongsTo(User)

Game.hasMany(Rating)
Rating.belongsTo(Game)


module.exports = {
    User,
    Basket,
    Game,
    Genre,
    BasketGame,
    Rating
}
