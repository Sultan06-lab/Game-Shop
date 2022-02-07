import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Input from '@mui/material/Input';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRegister, fetchUserLogin } from '../store/asyncAction/fetchUser';
import { useNavigate } from "react-router-dom";

const Auth = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {userInfo, isAuth} = useSelector(state => state.user)

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const location = useLocation();


  const signIn = async() => {
    
    if (location.pathname === '/login') {
    dispatch(fetchUserLogin(email, password))
    if(isAuth){
      navigate('/')
    }
    }
    if (location.pathname === '/registration') {
      dispatch(fetchUserRegister(email, password))
      if(isAuth){
        navigate('/')
      }
      console.log(userInfo, isAuth);
    }
  }

  return (
    <Card sx={{ maxWidth: 500, margin: 'auto', mt: 20 }}>
      <CardContent>
        <div className="form">
          <div className="container">
            <form>
              {location.pathname === '/login'
                ? <h3>Вход в аккаунт</h3>
                : <h3>Регистрация</h3>
              }
              <div>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} color={'primary'} sx={{ mb: 2, mt: 2 }} placeholder="email..." />
              </div>
              <div>
                <Input value={password} onChange={(e) => setPassword(e.target.value)} type='password' color={'primary'} sx={{ mb: 2 }} placeholder="password..." />
              </div>
              <div>
                <Button variant="contained" sx={{ mb: 2 }} endIcon={<SendIcon />} onClick={() => signIn()}>
                  {location.pathname === '/login' ? 'Войти' : 'Регистрация'}
                </Button>
                <div>
                  {location.pathname === '/login'
                    ? <div>
                      Нет аккаунта? <NavLink to='/registration'>Зарегистрируйся!</NavLink>
                    </div>
                    : <div>Есть аккаунт? <NavLink to='/login'>Войдите!</NavLink></div>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Auth;