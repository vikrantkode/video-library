import React, {useState} from 'react'
import "./Modal.css"
import {usePlaylistContext }from "../../context/context"

const Modal = () => {
    const {addPlaylist} = usePlaylistContext();

    const [playlistTitleName, setPlaylistTitleName] = useState("")


  return (
    <div className="playlist_container">
        <div className="dialog_container">
            <div className="items_in_playlist">
                <label className="dialog_items">
                    <input type="text" placeholder='enter title' 
                    onChange={(e)=>setPlaylistTitleName(e.target.value)}
                    value={playlistTitleName}/></label>   

            </div>
            <footer className="dialog_footer">
                <button className="btn btn-primary" 
                onClick={()=>addPlaylist(playlistTitleName)}>ADD</button>
            </footer>
        </div>
    </div>
  )
}

export {Modal}