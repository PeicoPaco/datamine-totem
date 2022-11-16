import React from 'react'
import './StudioMapper.css'
import { Link } from 'react-router-dom'

function StudioMapper() {
  return (
    <>
        <div id='background-top-left-discover-mapper'></div>
        <div id='background-top-right-discover-mapper'></div>
        <div id='background-bottom-left-discover-mapper'></div>
        <div id='logo-container-mapper'></div>
        <div className='image-container-mapper'>
            <div className='image-container-title-mapper'>
                <p>MAPEE EN EL FRENTE</p>
            </div> 
            <div className='image-container-image-mapper'></div>
            <div className='image-container-button-mapper'>
                <Link to='../videoplayer/studiomapper1'><p>VER MÁS</p></Link>
            </div>
        </div>
        <div className='image-container-mapper-2'>
            <div className='image-container-title-mapper'>
                <p>GEOREFERENCIACION</p>
            </div> 
            <div className='image-container-image-mapper-2'></div>
            <div className='image-container-button-mapper'>
                <p>VER MÁS</p>
            </div>
        </div>
    </>
  )
}

export default StudioMapper