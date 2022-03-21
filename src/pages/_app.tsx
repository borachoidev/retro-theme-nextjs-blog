import Header from '@components/header'
import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Header></Header>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
