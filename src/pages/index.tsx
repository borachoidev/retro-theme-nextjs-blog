import type { NextPage } from 'next'
import Head from 'next/head'
import { ReactElement } from 'react'
import BaseLayout from 'src/layouts/base'

const Home = () => {
  return (
    <div>
      <Head>
        <title>next js blog template by borachoi.dev</title>
      </Head>
      <h2>Hello</h2>
    </div>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
