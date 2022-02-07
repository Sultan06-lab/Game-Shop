import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { addGamePageAction } from '../store/Reducers/gameReducer';
  

const  BasicPagination = () => {

  const dispatch = useDispatch();
  const {count} = useSelector(state => state.game.games);
  const page = useSelector(state => state.game.gamePage);
  const limit = useSelector(state => state.game.limit);

  const countOfPages = Math.ceil(count / limit);
  
  const handleChange = (event, page) => {
    dispatch(addGamePageAction(page))
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
    
  };

  console.log(count)

  return (
    <Stack spacing={2} alignItems="center">
      { countOfPages && 
      <Pagination count={countOfPages} page={page} onChange={handleChange} color='primary'/>
}
    </Stack>
  );
}

export default BasicPagination;