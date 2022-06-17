import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
      <div className="container_sidebar">
        <div className="sidebar_nav">
         <NavLink to="/" activeclassname="active-link"> 
            <div className="sidebar_nav_icons">
              <span className="material-icons-outlined">home</span>
              <p className="sidebar_nav_icons_name">Home</p>
            </div>
          </NavLink>

          <NavLink to="/videos">
            <div className="sidebar_nav_icons">
              <span className="material-icons-outlined">explore</span>
              <p className="sidebar_nav_icons_name">Explore Videos</p>
            </div>
          </NavLink>

          <NavLink to="/like/dislike">
            <div className="sidebar_nav_icons">
              <span className="material-icons">thumb_up</span>
            < p className="sidebar_nav_icons_name">Liked Videos</p>
            </div>
          </NavLink>

          <NavLink to="/watchLater">
            <div className="sidebar_nav_icons">
              <span className="material-icons-outlined">watch_later</span>
              <p className="sidebar_nav_icons_name">Watch Later</p>
            </div>
            </NavLink>

          <NavLink to="/playlist">
            <div className="sidebar_nav_icons">
              <span className="material-icons-outlined">playlist_add</span>
              <p className="sidebar_nav_icons_name">Playlist</p>
           </div>
          </NavLink>

          <NavLink to="/history">
            <div className="sidebar_nav_icons">
              <span className="material-icons-outlined">history</span>
              <p className="sidebar_nav_icons_name">History</p>
            </div>
          </NavLink>
        </div>
      </div>
  );
};

export  {Sidebar};
