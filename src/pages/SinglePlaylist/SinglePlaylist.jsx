import React from 'react'
import "./SinglePlaylist.css"
import { Nav } from "../../components/Nav/Nav"
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { usePlaylistContext } from '../../context/PlayList-Context'
import { useParams } from 'react-router-dom'
import { ViCard } from '../../components/VideoCard/ViCard'


const SinglePlaylist = () => {
  const {playlistState:{playlistArr}} = usePlaylistContext();
  const {playlistId} = useParams();
  const currentPlaylist = playlistArr.find((item)=>item._id === playlistId)
  console.log(playlistArr.videos);
  console.log(playlistArr)
  return (
    <div className='container_singleplaylist'>
    <Nav/>
    <Sidebar />
    {currentPlaylist.videos.map((video)=><ViCard key={video._id} playlistVideoId={playlistId} video={video}/>)}
    
 </div>
  )
}

export  {SinglePlaylist}