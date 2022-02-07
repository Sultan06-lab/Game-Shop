import { $host, $authHost } from "."

export const ratingCreate = async (rating, userId, gameId) => {
    const {data} = await $authHost.post('app/rating/', rating, userId, gameId)
    return data;
}

export const ratingGet = async (gameId = null) => {
    const {data} = await $host.get('app/rating/', {params: {
        gameId
    }})
    return data;
}