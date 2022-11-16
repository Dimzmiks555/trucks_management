import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import 'moment/locale/ru'
import moment from "moment";

export default function App({ Component, pageProps }: AppProps) {

  const theme = createTheme({
    typography: {
      fontFamily: 'Jost'
    },
    palette: {
      primary: {
        main: '#15BD8E'
      }
    }
  });
  moment.locale('ru');

  return (
    <LocalizationProvider dateAdapter={AdapterMoment} >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </LocalizationProvider>
  )
}
