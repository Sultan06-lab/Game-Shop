import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { genreCreate } from '../../http/genreApi';

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



  const CreateGenre = ({handleClose, open}) => {

  const [value, setValue] = React.useState('');

    

    const addGenre = () => {
      genreCreate({name: value}).then(data => setValue(''))
      console.log(value)
     }

    return (
        <>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Input placeholder='Введите название жанра' value={value} onChange={(e) => setValue(e.target.value)}/>
            <Stack>
            <Button onClick={() => addGenre()} sx={{mt: 1, maxWidth: 200}}  variant="contained" size="small">Добавить</Button>
            <Button onClick={() => handleClose()} sx={{mt: 1, maxWidth: 200}} variant="contained" size="small">Закрыть</Button>
            </Stack>
          </Box>
        </Modal>
      </>
    )
}

export default CreateGenre