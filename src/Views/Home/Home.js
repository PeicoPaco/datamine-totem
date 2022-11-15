import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <>
        <div id='left-top-background-home'></div>
        <div id='right-top-background-home'></div>
        <div id='left-bottom-background-home'></div>
        <div id='right-bottom-background-home'></div>
        <div className='navbar-home'>
            <ul className='navbar-box-content-home'>
                <li className='navbar-link-home'>¿Quiénes somos?</li>
                <li className='navbar-link-home'>Servicios</li>
                <li className='navbar-link-home'>Testimonios</li>
                <li className='navbar-link-home'>PDU</li>
            </ul>
        </div>
        <div className='center-image-home'></div>
        <div className='title-box-home'>
            <h1 className='title-home'>¿Quiénes somos?</h1>
        </div>
        <div className='description-box-home'>
            <p>Somos el principal proveedor mundial de tecnología para planificación y 
                gestión de las operaciones mineras. Brindamos soluciones que abarcan 
                las etapas de exploración, modelamiento, planificación minera, operaciones, 
                logística, comercialización y gestión de ESG</p>
        </div>
        <div className='logo-datamine-home'></div>
        <div className='link-navbar-container'>
            <nav>
                <ul>
                    <li><Link classname='home-links' to="/discover">Discover</Link></li>
                    <li><Link classname='home-links' to="/studioEM">StudioEM</Link></li>
                </ul> 
            </nav>
        </div>
        <div className='lower-background-image'></div>
        
    </>
  )
}

export default Home