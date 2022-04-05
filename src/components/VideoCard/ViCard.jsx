import React from "react";
import "./ViCard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLikeDislike } from "../../context/context";

const ViCard = ({ video }) => {
  const { likeVideoList, setLikeVideoList } = useLikeDislike();
  const navigate = useNavigate();
  const encodedToken = localStorage.getItem("token");

  
  const likeClickHandler = async (encodedToken) => {
    const dataToSend = { video: video };
    if (encodedToken) {
      try {
        const resp = await axios.post(`/api/user/likes`, dataToSend, {
          headers: { authorization: encodedToken },
        });
        setLikeVideoList(resp.data.likes);
      } catch (err) {
        alert(`error from server ${err}`)
      }
    } else {
      navigate("/login");
    }
  };

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
        {likeVideoList.find((e)=>e._id === video._id) ? 
        <span class="material-icons vicons">thumb_up</span> :  
        <span className="material-icons-outlined vicons"onClick={() => likeClickHandler(encodedToken)}>
            thumb_up
          </span>}
         
          <span className="material-icons-outlined vicons">watch_later</span>
          <span className="material-icons-outlined vicons">playlist_add</span>
        </div>
      </div>
    </div>

    // </div>
  );
};
export default ViCard;
