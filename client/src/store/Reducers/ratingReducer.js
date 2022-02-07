const initialRating = {
    rating: [],
}

const ADD_RATING = 'ADD_RATING'

export const ratingReducer = (state = initialRating, action) => {

    switch (action.type) {
        case ADD_RATING: {
                return {...state, rating: [...action.payload]}
            }    
        default:
            return state
    }
}

export const addRatingAction = (payload) => ({type: ADD_RATING, payload: payload})
