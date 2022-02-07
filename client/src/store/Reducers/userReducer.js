const defaultUser = {
    userInfo: [],
    isAuth: false
}

const FALL_USER = 'FALL_USER'
const ADD_USER = 'ADD_USER';
const IS_AUTH = 'IS_AUTH'

export const userReducer = (state = defaultUser, action) => {
    switch (action.type) {

        case ADD_USER: {
            return { ...state, userInfo: [action.payload], isAuth: true }
        }
        // case IS_AUTH: {
        //     return { ...state, isAuth: true }
        // }
        case IS_AUTH: {
            return { ...state, userInfo: [action.payload], isAuth: true }
        }
        case FALL_USER: {
            return { ...state, userInfo: [], isAuth: action.payload }
        }
        default:
            return state
    }
}

export const addUserAction = (payload) => ({ type: ADD_USER, payload: payload })
export const isAuthAction = (payload) => ({ type: IS_AUTH, payload: payload })
export const fallUserAction = (payload) => ({ type: FALL_USER, payload: payload })


// case IS_AUTH: {
//     return {...state, userInfo: [action.payload], isAuth: true}
// }

// case IS_AUTH: {
//     return { ...state, isAuth: true }
// }