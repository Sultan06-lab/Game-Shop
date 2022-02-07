import { $host, $authHost } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
    const {data} = await $host.post('app/user/registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('app/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('app/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}