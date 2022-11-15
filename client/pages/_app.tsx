import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material'

export default function App({ Component, pageProps }: AppProps) {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#15BD8E'
      }
    }
  });


  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
