import { addUserAction } from "../Reducers/userReducer"; 
import { login, registration } from "../../http/userApi";

export const fetchUserRegister = (email, password) => {
    return async(dispatch) => {
        const response = await registration(email, password);
          dispatch(addUserAction(response));
    } 
}
 
export const fetchUserLogin = (email, password) => {
    return async(dispatch) => {
        const response = await login(email, password);
          dispatch(addUserAction(response));
    } 
}
 
