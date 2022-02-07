const initialGenre = {
    genres: [],
    genreId: 0
}

const ADD_GENRE = 'ADD_GENRE'
const ADD_GENRE_ID = 'ADD_GENRE_ID'

export const genreReducer = (state = initialGenre, action) => {
    
    switch (action.type) {
        case ADD_GENRE: {
            return {...state, genres: [...action.payload]}
        }
        case ADD_GENRE_ID: {
            return {...state, genreId: action.payload}
        }
        default:
            return state
    }
}

export const genreAddCreation = (payload) => ({type: ADD_GENRE, payload: payload})
export const genreIDAddCreation = (payload) => ({type: ADD_GENRE_ID, payload: payload})
