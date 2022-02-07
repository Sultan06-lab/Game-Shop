import { genreGet } from "../../http/genreApi";
import { genreAddCreation } from "../Reducers/genreReducer";



// export const  fetchGenre = () => {
//     return (dispatch) => {
//         genreGet().then(response => dispatch(genreAddCreation(response)))
//     }
// }


export const  fetchGenre = () => {
    return (dispatch) => {
        genreGet().then(response => dispatch(genreAddCreation(response)))
    }
}

