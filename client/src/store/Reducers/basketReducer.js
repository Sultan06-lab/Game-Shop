const initialBasket = {
    basket: []
}

const ADD_GAME_IN_BASKET = 'ADD_GAME_IN_BASKET';

export const basketReducer = (state = initialBasket, action) => {
    switch (action.type) {
        case ADD_GAME_IN_BASKET: {
            return {...state, basket: [...state.basket, action.payload]}
        }     
        default:
            return state;
    }
}

export const addGameInBasket = (payload) => ({type: ADD_GAME_IN_BASKET, payload: payload})