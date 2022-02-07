import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CreateGenre from '../components/modals/createGenre';
import CreateGame from '../components/modals/createGame';

const Admin = () => {

    const [genreOpen, setGenreOpen] = React.useState(false);
    const [gameOpen, setGameOpen] = React.useState(false);
    const handleGenreOpen = () => setGenreOpen(true);
    const handleGameOpen = () => setGameOpen(true);
    const handleGenreClose = () => setGenreOpen(false);
    const handleGameClose = () => setGameOpen(false);



    return (
        <Container sx={{ mt: 10, padding: 2 }} maxWidth="lg">
            <Stack spacing={2} direction="column" >
                <Button onClick={handleGenreOpen} variant="contained">Добавить жанр</Button>
                <Button onClick={handleGameOpen} variant="contained">Добавить игру</Button>
            </Stack>
            <CreateGenre open={genreOpen} handleClose={handleGenreClose} />
            <CreateGame open={gameOpen} handleClose={handleGameClose}/>
        </Container>
    )
}

export default Admin;