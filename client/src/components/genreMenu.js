import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGenre } from '../store/asyncAction/fetchGenre';
import { genreIDAddCreation } from '../store/Reducers/genreReducer'
import { addGamePageAction } from '../store/Reducers/gameReducer';
import Container from '@mui/material/Container';


const GenreMenu = () => {

    const dispatch = useDispatch();
    const { genres } = useSelector(state => state.genre);

    React.useEffect(() => {
        dispatch(fetchGenre())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const genreClick = (id) => {
        dispatch(genreIDAddCreation(id))
        dispatch(addGamePageAction(1))

    }

    const handleDelete = () => {
        dispatch(genreIDAddCreation())
        dispatch(addGamePageAction(1))
    };


    return (
        <Container >
            <Stack sx={{ mt: 2 }} spacing={1} alignItems="center">
                <Stack direction="row" spacing={1} display='flex' flexWrap='wrap'>
                    {genres && genres.map(genre => (
                        <Chip key={genre.id} sx={{ mb: 1 }} onClick={() => genreClick(genre.id)} onDelete={handleDelete} label={genre.name} clickable color="primary" />
                    ))}
                </Stack>
            </Stack>
        </Container>
    )
}

export default GenreMenu