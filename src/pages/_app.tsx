import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from './Layout'

import GlobalStyle from '@/styles/GlobalStyle'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>RobôCIn</title>
        <meta name="description" content="R&D robotics group from Brazil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        /> */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
