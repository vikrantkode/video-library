import React from 'react'
import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'
import ViCard from '../../components/VideoCard/ViCard'
import "./VideoListing.css"
import { useVideoList } from '../../context/Video-Context'
const VideoListing = () => {
    const {videoList} = useVideoList();
  return (
    <div className='container_videolist '>
        <Nav/>
        <Sidebar />
        <div className="parent">
            {/* <div className='card_top'>    */}
                    {videoList.map((video)=><ViCard key={video._id} video={video}/>)}
            {/* </div> */}
        </div>
    </div>
  )
}

export default VideoListing