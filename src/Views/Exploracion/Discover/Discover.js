import React from 'react'
import './Discover.css'
import { Link } from 'react-router-dom'
import '../../globalart.css'

function Discover() {
  return (
    <>
    <div id='background-top-left-discover'></div>
    <div id='background-top-right-discover'></div>
    <div id='background-bottom-left-discover'></div>
    <div id='background-top-left-discover-blue'></div>
    <div id='background-top-right-discover-blue'></div>
    <div id='background-bottom-left-discover-blue'></div>
    <div id='logo-container-discover'></div>
    <div className='text-container-discover'>
      <p>Discover Suite diseñado especialmente para la industria de la minería y la exploración. Ofrece un paquete 
        de herramientas para compilar, visualizar, analizar y mapear datos geológicos en 2D y 3D
      </p>
    </div>
    <div className='image-container-discover'>
        <div className='image-container-title-discover'>
          <p>DISCOVER MAPINFO</p>
        </div> 
        <div className='image-container-subtitle-discover'>
          <p>DISCOVER 2D</p>
        </div>
        <div className='image-container-image-discover'>
        </div>
        <div className='image-container-button-discover'>
          <p>VER MÁS</p>
      </div>
    </div>
    <div className='image-container-discover-2'>
      <div className='image-container-title-discover'>
        <p>DISCOVER FOR ARCGIS PRO</p>
      </div> 
      <div className='image-container-subtitle-discover'>
        <p>Datos en 2D y 3D</p>
      </div>
      <div className='image-container-image-discover-2'>
      </div>
      <div className='image-container-button-discover'>
        <Link to="../videoplayer/discover1"><p>VER MÁS</p></Link>
      </div>
    </div>
    <div className='logo-container-discovermobile'></div>
    <div className='text-container-discovermobile'>
      <p>Recolección de datos en campo a través de dispositivos móviles, lo cual permite el envío de la data 
        en tiempo real desde el DISCOVER DESKTOP al DISCOVER MOBILE.
      </p>
    </div>
    <div className='large-container-discovermobile'>
      <div className='large-container-image-1'></div>
      <div className='large-container-button'>
        <p>VER MÁS</p>
      </div>
      <div className='large-container-image-QR'></div>
      <div className='large-container-arrows'></div>
      <div className='large-container-image-2'></div>
    </div>
    <Link to="/datamine-totem">
      <button id='home-button'>Home</button>
    </Link>
    </>
  )
}

export default Discover