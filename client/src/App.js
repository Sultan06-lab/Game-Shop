import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/appRouter';
import Navbar from './components/navbar';
import { check } from './http/userApi';
import { useDispatch} from 'react-redux';
import { isAuthAction } from './store/Reducers/userReducer';
import Stack from '@mui/material/Stack';


function App() {


  const dispatch = useDispatch();
  
  React.useEffect(() => {
    
    check().then(data => 
      {dispatch(isAuthAction(data))
      })    
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <BrowserRouter>
    <Stack>
    <Navbar />
    <AppRouter sx={{maxHeight: '100vh'}}/>
    </Stack>
    </BrowserRouter>
  );
}

export default App;