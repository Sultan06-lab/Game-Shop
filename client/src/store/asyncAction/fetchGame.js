import { gameGet, gameGetOne } from "../../http/gameApi"
import { addGameAction, addOneGameAction } from "../Reducers/gameReducer"

export const  fetchGame = (genreId, limit, page) => {
    return (dispatch) => {
        gameGet(genreId, limit, page).then(response => dispatch(addGameAction(response)))
    }
}

export const  fetchOneGame = (id) => {
    return (dispatch) => {
        gameGetOne(id).then(response => dispatch(addOneGameAction(response)))
    }
}

