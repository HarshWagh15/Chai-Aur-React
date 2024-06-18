import React from 'react'
import About from './Components/About/About'
import Servicess from './Components/Servicess/Servicess'
import { Outlet } from 'react-router-dom'

function Layout() {

  return (
    <>
  <About />
  <Outlet />
  <Servicess />
    </>
  )
}

export default Layout