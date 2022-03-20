import Header from '@components/header'
import '@styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
