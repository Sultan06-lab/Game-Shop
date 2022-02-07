import { userReducer } from "./Reducers/userReducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension' 
import thunk from 'redux-thunk'
import { genreReducer } from "./Reducers/genreReducer";
import { gameReducer } from "./Reducers/gameReducer";
import { ratingReducer } from "./Reducers/ratingReducer";
import { basketReducer } from "./Reducers/basketReducer";

const rootReducer = combineReducers({
    user: userReducer,
    genre: genreReducer,
    game: gameReducer, 
    rating: ratingReducer,
    basket: basketReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))