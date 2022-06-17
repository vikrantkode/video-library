import React from 'react'
import "./Playlist.css"
import { Nav } from "../../components/Nav/Nav"
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { PlaylistCard } from '../../components/PlaylistCard/PlaylistCard'
import { usePlaylistContext } from '../../context/context'

const Playlist = () => {
  
  const {playlistState: {playlistArr}} = usePlaylistContext();
  return (
    <div className='container_playlist'>
      <Nav/>
      <Sidebar />
      {/* <div className="container_card_playlist"> */}
        {playlistArr.map((item)=><PlaylistCard key={item._id} playlist={item}/>)}
      {/* </div> */}
   </div>
  )
}

export {Playlist}