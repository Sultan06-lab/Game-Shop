import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';
import { ratingCreate } from '../../http/ratingApi';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

 
const Review = ({ handleClose, open }) => {

    const { id } = useParams();
    const gameId = id;
    const [rating, setRating] = React.useState(0);
    const { userInfo, isAuth } = useSelector(state => state.user)
    const userId = userInfo[0].id;


    const addRatingClick = () => {
        ratingCreate({rating: rating, userId: userId, gameId: gameId})        
    }

    return (    
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {isAuth &&
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Оставьте ваш отзыв, Сэр!
                        <Rating name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);

                            }}
                            />
                    </Typography>}
                    <Button onClick={addRatingClick} variant="contained">Оставить</Button>
                </Box>
            </Modal>
        </div>
        
    )
}

export default Review;