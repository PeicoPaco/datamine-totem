import React from 'react'
import "./StudioEM.css"

function StudioEM() {
  return (
    <>
      <div id='background-top-left-discover-EM'></div>
      <div id='background-top-right-discover-EM'></div>
      <div id='background-bottom-left-discover-EM'></div>
      <div id='logo-container-studioem'></div>
      <div className='text-container-EM'>
        <p>Está diseñado para geólogos y exploradores. Incluye edición de puntos 
          y strings, creación de wireframes, modelado de bloques volumétrico y estimación. 
          Cuenta con un enlace dinámica a una base de datos.
        </p>
      </div>
      <div className='image-container-EM'>
        <div className='image-container-title-EM'>
          <p>SECCIONES GEOLÓGICAS</p>
        </div> 
        <div className='image-container-image-EM'>
        </div>
        <div className='image-container-button-EM'>
          <p>VER MÁS</p>
        </div>
      </div>
      <div className='image-container-EM-2'>
        <div className='image-container-title-EM'>
          <p>MODELO 3D</p>
        </div> 
        <div className='image-container-image-EM-2'>
        </div>
        <div className='image-container-button-EM'>
          <p>VER MÁS</p>
        </div>
      </div>
    </>
  )
}

export default StudioEM