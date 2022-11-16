import { useParams } from 'react-router-dom'
import React from 'react'
import DiscoverVideo1 from '../../Components/DiscoverVideo1'
import StudioMapper1 from '../../Components/StudioMapper1'
import StudioRMVideo1 from '../../Components/StudioRM/StudioRMVideo1'
import './VideoPlayer.css'

function VideoPlayer() {
    const { id } = useParams();

    return (
    <>
    <div className='video-container'>
        {id === "discover1" &&  <DiscoverVideo1/>}
        {id === "studiomapper1" &&  <StudioMapper1/>}
        {id === "studiorm1" &&  <StudioRMVideo1/>}
    </div>
    </>
  )
}

export default VideoPlayer