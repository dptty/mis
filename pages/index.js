import React from 'react'
import Head from 'next/head'
import './index.scss'

import Dashboard from '../components/dasboard/dashboard'
import { MuiThemeProvider } from 'material-ui'

const Home = () => {
  return (
    <MuiThemeProvider>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800" rel="stylesheet" />
      </Head>

      <Dashboard />

      <style jsx>{``}</style>
    </MuiThemeProvider>
  )
}

export default Home
