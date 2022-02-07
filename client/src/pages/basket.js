import Stack from '@mui/material/Stack';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';



const Basket = () => {

    const games = useSelector(state => state.basket.basket)


    console.log(games)
    return (
        <Stack sx={{ mt: 2 }} display='flex' spacing={1} alignItems="center">
            <h1>Это ваша корзина</h1>
            <Stack direction="row" spacing={20}>
            {games && games.map(game => (
                            <Stack>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    width='100'
                                    image={process.env.REACT_APP_API_URL + game.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {game.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Цена: {game.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" size="small">Удалить из корзины</Button>
                                </CardActions>
                            </Card>
                        </Stack>
                ))}


            <Card sx={{ maxWidth: 345, maxHeight: 150, display: 'flex', justifyContent: 'space-around', flexDirection: 'column', padding: 1, mt: 0 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Общая сумма
                    </Typography>
                </CardContent>
                <CardActions>
                    <NavLink to='/'>
                        <Button variant="contained" size="small">Вернуться к покупкам</Button>
                    </NavLink>
                </CardActions>
            </Card>
            </Stack>
        </Stack>
    )
}

export default Basket;