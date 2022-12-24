import React, { Children } from 'react'
import Head from 'next/head'

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Innopolis Store</title>
      </Head>
      <header>
        <Navbar data-testid="header" />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer data-testid="footer" />
      </footer>
    </div>
  )
}

export default Layout
