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
          <div className="sidebar_nav_icons">
          <span className="material-icons-outlined">explore</span>
            <p className="sidebar_nav_icons_name">Explore Videos</p>
          </div>
          <div className="sidebar_nav_icons">
          <span className="material-icons-outlined">playlist_add</span>
            <p className="sidebar_nav_icons_name">Playlist</p>
          </div>
          <div className="sidebar_nav_icons">
          <span className="material-icons-outlined">watch_later</span>
            <p className="sidebar_nav_icons_name">Watch Later</p>
          </div>

          <div className="sidebar_nav_icons">
          <span className="material-icons-outlined">thumb_up</span>
            <p className="sidebar_nav_icons_name">Liked Videos</p>
          </div>
          <div className="sidebar_nav_icons">
          <span className="material-icons-outlined">history</span>
            <p className="sidebar_nav_icons_name">History</p>
          </div>
        </div>
      </div>
  );
};

export default Sidebar;
