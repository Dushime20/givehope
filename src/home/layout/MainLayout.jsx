import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default MainLayout
