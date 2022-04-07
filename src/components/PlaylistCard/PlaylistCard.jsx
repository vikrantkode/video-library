import React from "react";
import { usePlaylistContext } from "../../context/context";
import "./PlaylistCard.css";

const PlaylistCard = ({ playlist }) => {


  const {addVideoInPlaylist,deletePlaylist} = usePlaylistContext();
  return (
    <div class="playlist_card">
      <h2>{playlist.title}</h2>
      <h3>{playlist.videos.length}</h3>
      <button class="btn btn-success_outline" onClick={()=>addVideoInPlaylist()}>OPEN</button>
      <button class="btn btn-error_outline" onClick={()=>deletePlaylist(playlist)}>DELETE</button>
    </div>
  );
};

export { PlaylistCard };
