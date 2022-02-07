import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import { fetchGenre } from '../../store/asyncAction/fetchGenre';
import { useSelector, useDispatch } from 'react-redux';
import { gameCreate } from '../../http/gameApi';

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

const CreateGame = ({ handleClose, open }) => {

    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState(null);
    const [description, setDescription] = React.useState('');
    const [file, setFile] = React.useState(null);
    const [genre, setGenre] = React.useState(null);

    const dispatch = useDispatch();
    const { genres } = useSelector(state => state.genre);


    const handleChange = (event) => {
        setGenre(event.target.value);
    };

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const addGame = () => {
        const formData = new FormData();
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('description', description)
        formData.append('genreId', genre)
        gameCreate(formData)
        setName('')
        setPrice(null)
        setDescription('')
        setGenre(null)
        setFile(null)
    } 

    React.useEffect(() => {
        dispatch(fetchGenre)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(name)
    console.log(price)
    console.log(description)
    console.log(file)
    console.log(genre)
    console.log(genres)
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >

                <Box sx={style}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Выберите жанр</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={genre}
                            label="Genre"
                            onChange={handleChange}
                        >
                            {genres && genres.map(genre => (
                                <MenuItem key={genre.id} value={genre.id}>{genre.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Stack>
                        <Input value={name} onChange={(e) => setName(e.target.value)} sx={{ mt: 2 }} placeholder='Введите название игры' />
                        <Input 
                        startAdornment={<InputAdornment position="start">Цена:</InputAdornment>} 
                        value={price} onChange={(e) => setPrice(Number(e.target.value))} sx={{ mt: 2 }} 
                        endAdornment={<InputAdornment position="end">руб.</InputAdornment>} />
                        <Input value={description} onChange={(e) => setDescription((e.target.value))} sx={{ mt: 2 }} placeholder='Введите краткое описание' />
                        <Input onChange={(e) => selectFile(e)} sx={{ mt: 2 }} type='file' disableUnderline='false' />
                    </Stack>
                    <Stack>
                        <Button sx={{ mt: 1, maxWidth: 200 }} variant="contained" size="small" onClick={() => addGame()}>Добавить</Button>
                        <Button sx={{ mt: 1, maxWidth: 200 }} variant="contained" size="small" onClick={() => handleClose()}>Закрыть</Button>
                    </Stack>
                </Box>
            </Modal>
        </>
    )
}

export default CreateGame