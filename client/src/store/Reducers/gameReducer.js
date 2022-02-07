const initialGames = {
    games: {},
    oneGame: {},
    gamePage: 1,
    limit: 4,
}

const ADD_GAMES = 'ADD_GAMES'
const ADD_ONE_GAME = 'ADD_ONE_GAME'
const ADD_GAME_PAGE = 'ADD_GAME_PAGE'

export const gameReducer = (state = initialGames, action) => {
    switch (action.type) {
        case ADD_GAMES: {
            return {...state, games: action.payload}
        }     
        case ADD_ONE_GAME: {
            return {...state, oneGame: action.payload}
        }       
        case ADD_GAME_PAGE: {
            return {...state, gamePage: action.payload}
        }       
        default:
            return state;
    }
}


export const addGameAction = (payload) => ({type: ADD_GAMES, payload: payload})
export const addOneGameAction = (payload) => ({type: ADD_ONE_GAME, payload: payload})
export const addGamePageAction = (payload) => ({type: ADD_GAME_PAGE, payload: payload})
