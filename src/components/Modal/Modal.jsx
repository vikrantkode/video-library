import React, {useState} from 'react'
import "./Modal.css"
import { usePlaylistContext }from "../../context/context"


const Modal = ({video,setModalVisibility,deleteVideoFromPlaylistClickHandler}) => {
    const {createPlaylist,addVideoInPlaylist, playlistState: {playlistArr} } = usePlaylistContext();
    const [playlistTitleName, setPlaylistTitleName] = useState("");
    // const isVideoInPlaylist = (item) =>{
    //         if(item.videos.find((e)=>e._id === video._id)){
    //             return true;
    //         }
    //         return false;
    // }
    const isVideoInPlaylist = (playlist, playlistTitleId, videoId) => {
        return playlist.find(({ _id }) => _id === playlistTitleId)?.videos.some(({ _id }) => _id === videoId)
    }           
  return (
    <div className="playlist_container">
        <div className="dialog_container">
            <div className="modal_header">
                <h1>Save to</h1>
                <span className="material-icons-outlined icon" onClick={()=>setModalVisibility(modalVisibility=>!modalVisibility)}>close</span>
            </div>
            
            <div className="playlist_list">
                {playlistArr.length === 0 ? <p className='playlist_title_border'>No Playlists Available</p> : 
                playlistArr.map(item=><label key={item._id} className='playlist_title_border'>
                <input type="checkbox"
                checked = {isVideoInPlaylist(playlistArr,item._id,video._id)?? false}
                onChange={()=>isVideoInPlaylist(playlistArr,item._id,video._id) ? 
                    deleteVideoFromPlaylistClickHandler(item._id,video._id ): addVideoInPlaylist(item,video) }/>{item.title}</label>)
                }
            </div>

            <div className="items_in_playlist">
                <label className="dialog_items">
                    <input type="text" placeholder='Playlist Name' 
                    onChange={(e)=>setPlaylistTitleName(e.target.value)}
                    value={playlistTitleName}/>
                </label>   
            </div>
            <footer className="dialog_footer">
                <button className="btn btn-primary modal_btn" 
                onClick={()=>createPlaylist(playlistTitleName)}>CREATE PLAYLIST</button>
            </footer>
        </div>
    </div>
  )
}

export {Modal}