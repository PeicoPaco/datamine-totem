import React from 'react'
import DiscoverVideoFile1 from '../Videos/Discover/DiscoverVideo1.mp4'
import './Video.css'

function DiscoverVideo1() {
  return (
    <video width='100%' height="auto" controls src={DiscoverVideoFile1} type='video/mp4'>
    </video>
  )
}

export default DiscoverVideo1