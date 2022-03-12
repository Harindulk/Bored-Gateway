import '../styles/globals.css'
import Head from 'next/head'
import { TransactionProvider } from '../context/TransactionContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Bored Gatway</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
        </Head>


      <TransactionProvider>
        <Component {...pageProps} />
      </TransactionProvider>
    </>


  )
}

export default MyApp