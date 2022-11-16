import React from 'react'
import { Link } from 'react-router-dom'
import './StudioRM.css'

function StudioRM() {
  return (
    <>
        <div id='background-top-left-rm'></div>
        <div id='background-top-right-rm'></div>
        <div id='background-bottom-left-rm'></div>
        <div id='logo-container-studiorm'></div>
        <div className='image-container-studiorm-1'>
            <div className='image-container-studiorm-1-image'></div>
        </div>
        <div className='image-container-studiorm-2'>
            <div className='image-container-studiorm-1-title'>
                <p>MAPA DE ISOVALORES</p>
            </div>
            <div className='image-container-studiorm-2-image'></div>
            <div className='image-container-button-rm'>
                <Link to='../videoplayer/studiorm1'><p>VER MÁS</p></Link>
            </div>
        </div>
    </>
  )
}

export default StudioRM