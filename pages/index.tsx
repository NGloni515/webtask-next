import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import Body from '../components/Body/Body'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WebTask Monet</title>
        <meta name="description" content="Web Task Monet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Body />
    </div>
  )
}

export default Home
