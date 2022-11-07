import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
    <div id='left-top-background-home'></div>
    <div id='right-top-background-home'></div>
    <div id='left-bottom-background-home'></div>
    <div id='right-bottom-background-home'></div>
    <div className='navbar-home'></div>
        <ul className='navbar-box-content-home'>
            <li className='navbar-link-home'>¿Quiénes somos?</li>
            <li className='navbar-link-home'>Servicios</li>
            <li className='navbar-link-home'>Testimonios</li>
            <li className='navbar-link-home'>PDU</li>
        </ul>
    </>
  )
}

export default Home