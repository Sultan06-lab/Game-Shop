import React from 'react';
import ShopIcon from '@mui/icons-material/Shop';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from 'react-redux';
import { fallUserAction} from '../store/Reducers/userReducer'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Navbar = () => {

    const {isAuth} = useSelector(state => state.user);
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(fallUserAction(false));
        console.log(isAuth);
    }
    
    return (
        <>
        <Stack sx={{ bgcolor: '#cfe8fc' }}>

        <Container sx={{}}>
        <Stack sx={{minHeight: 80 }} direction="row" spacing={1} alignItems='center' justifyContent="space-between" padding='5'>
            <NavLink style={{ textDecoration: 'none' }} to='/'>
                <div >
                 <ShopIcon color="primary" fontSize="large"/>
                </div>
            </NavLink>
            {isAuth ? 
            <Stack sx={{}} direction='row' flexWrap='wrap'>
            <NavLink to='/basket' style={{ textDecoration: 'none' }}><div><ShoppingCartIcon color="primary" fontSize="large"/></div></NavLink>
            <NavLink to='/admin' style={{ textDecoration: 'none' }}><Button sx={{mr: 1}} variant="contained">АДМИН</Button></NavLink>
            <NavLink to='' style={{ textDecoration: 'none' }}><Button onClick={() => logOut()}  variant="contained">ВЫЙТИ</Button></NavLink>
            </Stack>
            :
            <NavLink to='/login' style={{ textDecoration: 'none' }}><Button variant="contained">ВОЙТИ</Button></NavLink>  
        }        
        </Stack> 
        </Container>
        </Stack>
        </>
    )
}

export default Navbar;