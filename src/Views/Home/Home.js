import React from 'react'
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
            <p>Somos el principal proveedor mundial de tecnologóa para planificación y 
                gestión de las operaciones mineras. Brindamos soluciones que abarcan 
                las etapas de exploración, modelamienti, planificación minera, operaciones, 
                logística, comercialización y gestión de ESG</p>
        </div>
        <div className='logo-datamine-home'></div>
    </>
  )
}

export default Home