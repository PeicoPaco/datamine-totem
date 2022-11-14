import { useParams } from 'react-router-dom'
import React from 'react'
import DiscoverVideo1 from '../../Components/DiscoverVideo1'
import DiscoverVideo2 from '../../Components/DiscoverVideo2'
import './VideoPlayer.css'

function VideoPlayer() {
    const { id } = useParams();

    return (
    <>
    <div className='video-container'>
        {id === "discover1" &&  <DiscoverVideo1/>}
        {id === "discover2" &&  <DiscoverVideo2/>}
    </div>
    </>
  )
}

export default VideoPlayer