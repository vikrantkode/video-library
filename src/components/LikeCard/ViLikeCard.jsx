import React from "react";
import "./ViLikeCard.css";


const ViLikeCard = ({ video, dislikeClickHandler }) => {
  return (
    <div className="card">
      <div className="image">
        <img
          src={`https://i.ytimg.com/vi/${video._id}/hqdefault.jpg`}
          alt="carosol"
        />
      </div>
      <div className="title">
        <h2 className="title__header">{video.title}</h2>
        <h4 className="title__subheading">{`Category : ${video.category}`}</h4>
      </div>

      <div className="card_footer">
        <div className="footer_info">
          <span className="btn-footer">{video.views} views</span>
          <span className="btn-footer">{video.uploaded} hours ago</span>
        </div>
        
        <div className="footer_icons">
          <span class="material-icons vicons" onClick={() => dislikeClickHandler(video._id)}>thumb_up</span>   
          <span className="material-icons-outlined vicons">watch_later</span>
          <span className="material-icons-outlined vicons">playlist_add</span>
        </div>
      </div>
    </div>

    // </div>
  );
};
export default ViLikeCard;
