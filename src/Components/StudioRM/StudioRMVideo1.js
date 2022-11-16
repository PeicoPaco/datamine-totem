import React from 'react'
import '../Video.css'
import StudioRMVideo1File from '../../Videos/Recursos/StudioRM1.mp4'

function StudioRMVideo1() {
  return (
    <video width='100%' height="auto" controls src={StudioRMVideo1File} type='video/mp4'>
    </video>
  )
}

export default StudioRMVideo1