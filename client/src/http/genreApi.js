import { $host, $authHost } from "."

export const genreCreate = async (genre) => {
    const {data} = await $authHost.post('app/genre', genre)
    return data;
}

export const genreGet = async () => {
    const {data} = await $host.get('app/genre')
    return data;
}