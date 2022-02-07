import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGame } from '../store/asyncAction/fetchGame';
import { genreIDAddCreation } from '../store/Reducers/genreReducer';


const GameItem = () => {

    const dispatch = useDispatch();
    const { rows } = useSelector(state => state.game.games);
    const { genreId } = useSelector(state => state.genre);
    const page = useSelector(state => state.game.gamePage);
    const limit = useSelector(state => state.game.limit);


    React.useEffect(() => {
        dispatch(fetchGame(genreId, limit, page))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [genreId, page])

    React.useEffect(() => {
        dispatch(genreIDAddCreation())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <>
            <Container >
                <Stack direction="row" display='flex' justifyContent='center' flexWrap='wrap'>

                    {rows &&
                        rows.map(game => (
                            <Card key={game.id} sx={{ maxWidth: 200, mt: 8, mr: 5, display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>
                                <>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        width='200'
                                        image={process.env.REACT_APP_API_URL + game.img}
                                        alt="callOfDuty"
                                    />
                                    <CardContent>
                                        <Typography sx={{ maxHeight: 20 }} noWrap={false} gutterBottom height='0.5' component="h5">
                                            {game.name}
                                        </Typography>
                                    </CardContent>
                                </>
                                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <NavLink to={`/game/${game.id}`} style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" size="small">Перейти в описание</Button>
                                    </NavLink>
                                </CardActions>
                            </Card>
                        ))}
                </Stack>
            </Container>
        </>
    )
}

export default GameItem;