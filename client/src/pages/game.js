import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOneGame } from '../store/asyncAction/fetchGame';
import Review from '../components/modals/reviewModal';
import ReviewGame from '../components/reviewGame';
import { fetchRating } from '../store/asyncAction/fetchRating';
import { addGameInBasket } from '../store/Reducers/basketReducer';

const Game = () => {


  const dispatch = useDispatch();
  const game = useSelector(state => state.game.oneGame);
  const { id } = useParams();
  const gameId = id
  const { userInfo, isAuth } = useSelector(state => state.user)



  React.useEffect(() => {
    dispatch(fetchOneGame(id))
    dispatch(fetchRating(gameId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  const addBasket = (gameBasket) => {
    dispatch(addGameInBasket(gameBasket))
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>

      <CssBaseline />
      <Container sx={{ display: 'flex', mt: 8, flexWrap: 'wrap' }} maxWidth="lg">
        <Card sx={{ maxWidth: 500, mr: 2 }}>
          <CardMedia
            component="img"
            height="340"
            width='400'
            image={process.env.REACT_APP_API_URL + game.img}
            alt="callOfDuty"
          />
          <CardContent>
            <h2>{game.name}</h2>
            <ReviewGame />
            <p>{game.description}</p>
          </CardContent>
          <CardActions>
            <NavLink to='/' style={{ textDecoration: 'none' }}>
              <Button variant="contained" size="small">Назад</Button>
            </NavLink>
          </CardActions>

          <CardActions>

            <Button variant="contained" size="small" onClick={handleOpen}>Оставить отзыв</Button>
            {isAuth ?
              <Review open={open} handleClose={handleClose} />
              :
              <></>
            }
          </CardActions>

        </Card>



        <Card sx={{ maxWidth: 200, maxHeight: 200, display: 'flex', bgcolor: '#cfe8fc', justifyContent: 'space-around', flexDirection: 'column', padding: 1, mt: 0, }} color='primary'>
          <span>Цена: {game.price} руб.</span>
            <Button variant="contained" size="small" onClick={() => addBasket(game)}>Добавить в корзину</Button>
        </Card>
      </Container>

    </>
  )
}


export default Game;