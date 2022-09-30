import React, { useContext, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './admin.css'

import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';
import { NavLink } from 'react-router-dom';
import { registration, login } from '../../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';

import { useTranslation } from 'react-i18next'

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        New Mobile
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Auth = observer(() => {

  const { t } = useTranslation('login');

  const {user} = useContext(Context)
  let navigate = useNavigate();
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [form, setForm] = useState({
    email : '',
    password : ''
  })
  const changeHandler = (event) => {
    event.preventDefault();
    setForm({...form, [event.target.name] : event.target.value})
  }
  const click = async () => {
    try{
      if(isLogin){
        await login(form.email, form.password).then(data => user.setUser(data))
     
      }else{
        await registration(form.email, form.password).then(data => user.setUser(data))
      }
      user.setIsAuth(true)
      navigate(ADMIN_ROUTE)
    }
    catch (error) {
      alert(error.response.data.message)
      
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isLogin ? t("login:login.login") : t("login:registration.registration")}
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="login"
              label={t("login:login.mail")}
              name="email"
              autoComplete={t("login:login.mail")}
              value={form.email}
              onChange={changeHandler}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={t("login:login.password")}
              type="password"
              id="password"
              autoComplete={t("login:login.password")}
              value={form.password}
              onChange={changeHandler}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            {/* <span style={user === "Սխալ մուտքանուն կամ գաղտնաբառ" || user === 'Դաշտերը լրացնել ամբողջությամբ' ? {color : 'red', fontSize : 12} : {color : 'green', fontSize : 12}}>{user}</span> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={click}

            >
             {
                isLogin ? t("login:login.signIn")
                : t("login:registration.signUp")
              }
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  {
                    isLogin ? "Forgot password?"
                    : ""
                  }
                </Link> */}
              </Grid>
              <Grid item>
                { isLogin ?
                    <><span> {t("login:login.doNotHaveAccount")} </span>  <NavLink to={REGISTRATION_ROUTE}>{t("login:registration.signUp")}</NavLink></>
                    : 
                    <><span>{t("login:registration.alreadyHaveAccount")}</span> <NavLink to={LOGIN_ROUTE}>{t("login:login.signIn")}</NavLink></>
                }
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
})
export default Auth
