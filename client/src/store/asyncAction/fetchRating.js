import {ratingGet} from "../../http/ratingApi";
import { addRatingAction } from "../Reducers/ratingReducer";

export const  fetchRating = (gameId) => {
    return (dispatch) => {
        ratingGet(gameId).then(response => dispatch(addRatingAction(response)))
    }
}

// export const  fetchGame = (genreId, limit, page) => {
//     return (dispatch) => {
//         gameGet(genreId, limit, page).then(response => dispatch(addGameAction(response)))
//     }
// }
