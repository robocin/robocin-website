import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from './Layout'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>RobôCIn</title>
        <meta name="description" content="R&D robotics group from Brazil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>       
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  ) 
}