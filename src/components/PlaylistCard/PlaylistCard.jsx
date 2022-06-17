import React from "react";
import { useNavigate } from "react-router-dom";
import { usePlaylistContext } from "../../context/context";
import "./PlaylistCard.css";

const PlaylistCard = ({ playlist }) => {
  const navigate = useNavigate();
  const { deletePlaylist } = usePlaylistContext();
  return (
    <div className="card">
      <div
        className="main_card_content"
        onClick={() => navigate(`/playlist/${playlist._id}`)} >
        <div className="image playlist_thumbnail">
          <img className="playlist_thumbnail"
            src={`${playlist.videos.length > 0 && `https://i.ytimg.com/vi/${playlist.videos[0]._id}/hqdefault.jpg`}`}
            alt="playlistcard"
          />
        </div>
      </div>

      <div className="card_footer">
        <div className="footer_info">
        <span className="btn-footer"><b>Playlist : {playlist.title}</b></span>
        <span className="btn-footer"><b>{playlist.videos.length} videos</b> </span>
        <span className="material-icons-outlined vicons" 
           onClick={() => deletePlaylist(playlist)}>delete</span> 
        </div>
      </div>
    </div>
  );
};

export { PlaylistCard };
