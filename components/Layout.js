import React from 'react'
import NavBar from './nav and footer/NavBar'
import Footer from './nav and footer/Footer'
export default function Layout(props) {
  return (
    <div>
        <NavBar/>
        {props.children}
        <Footer/>
    </div>
  )
}
