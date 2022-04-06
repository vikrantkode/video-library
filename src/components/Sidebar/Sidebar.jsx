import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
      <div className="container_sidebar">
        <div className="sidebar_nav">
         <Link to="/"> <div className="sidebar_nav_icons">
            <span className="material-icons-outlined">home</span>
            <p className="sidebar_nav_icons_name">Home</p>
          </div></Link>

          <Link to="/videos">
          <div className="sidebar_nav_icons">
          <span className="material-icons-outlined">explore</span>
            <p className="sidebar_nav_icons_name">Explore Videos</p>
          </div></Link>

          <Link to="/like/dislike"><div className="sidebar_nav_icons">
          <span className="material-icons">thumb_up</span>
            <p className="sidebar_nav_icons_name">Liked Videos</p>
          </div></Link>

          <Link to="/watchLater"><div className="sidebar_nav_icons">
          <span className="material-icons-outlined">watch_later</span>
            <p className="sidebar_nav_icons_name">Watch Later</p>
          </div></Link>

          <div className="sidebar_nav_icons">
          <span className="material-icons-outlined">playlist_add</span>
            <p className="sidebar_nav_icons_name">Playlist</p>
          </div>

          <Link to="/history"><div className="sidebar_nav_icons">
          <span className="material-icons-outlined">history</span>
            <p className="sidebar_nav_icons_name">History</p>
          </div></Link>
        </div>
      </div>
  );
};

export  {Sidebar};
