import React from "react";
import GenreMenu from "../components/genreMenu";
import GameItem from "../components/gameItem";
import BasicPagination from "../components/pagination";
import Stack from '@mui/material/Stack';


const Shop = () => {


    return (
        <Stack direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        minHeight={600}
        >
            <Stack>
            <GenreMenu />
            <GameItem sx={{display:'flex', padding: 10}}/>
            </Stack>
            <Stack >
            <BasicPagination/>
            </Stack>
        </Stack>
    )
}

export default Shop;