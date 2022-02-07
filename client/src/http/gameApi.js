import { $host, $authHost } from "."

export const gameCreate = async (game) => {
    const {data} = await $authHost.post('app/game/', game)
    return data;
}



export const gameGet = async (genreId = null, limit, page) => {
    const {data} = await $host.get('app/game/', {params: {
        genreId, limit, page
    }})
    return data;
}      


export const gameGetOne = async (id) => {
    const {data} = await $host.get('app/game/' + id)
    return data;
}

