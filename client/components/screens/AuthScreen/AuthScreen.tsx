import { Icon } from '@iconify/react';
import { Button, Fab, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import React from 'react'
import s from './AuthScreen.module.scss'

const AuthScreen = () => {

  const [login, setLogin] = React.useState<string | number>('');
  const [password, setPassword] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof login>) => {
    setLogin(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };



  return (
    <div className={s.screen}>
        <form>
            <div className={s.logo_wrapper}>
                <img src="/logo.svg"></img>
            </div>
            <div>

            </div>
            <FormControl sx={{ my: 1, minWidth: 120, width: '100%' }}>
              <InputLabel id="login">Пользователь</InputLabel>
              <Select
                fullWidth
                labelId="login"
                id="login_select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={login}
                label="Пользователь"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>Выберете пользователя</em>
                </MenuItem>
                <MenuItem value={10}>Андрей</MenuItem>
                <MenuItem value={20}>Михаил</MenuItem>
                <MenuItem value={30}>Юлия</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ my: 2, minWidth: 120, width: '100%' }}>
              <TextField value={password} onChange={(e) => {setPassword(e.target.value)}} label="Пароль" type="password"/>
            </FormControl>
            <Fab disabled={!login || !password} variant="extended" color="primary" aria-label="add" sx={{color: 'white', width: '100%', mt: 2, fontWeight: 'bold'}}>
              <Icon icon="mdi:key-variant" width={30} height={30} style={{marginRight: 10}}/>
              Войти
            </Fab>
            {/* <Button fullWidth sx={{mt: 2, color: '#fff', fontWeight: 'medium'}} size="large" variant="contained">Войти</Button> */}
        </form>
    </div>
  )
}

export default AuthScreen