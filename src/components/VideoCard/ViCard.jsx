import React from "react";
import "./ViCard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth, useLikeDislike,useWatchLater } from "../../context/context";

const ViCard = ({ video }) => {
  const { likeVideoList, setLikeVideoList } = useLikeDislike();
  const { watchLater, setWatchLater} = useWatchLater();
  const navigate = useNavigate();
  const {state: { encodedToken },} = useAuth();


  const likeClickHandler = async (encodedToken) => {
    if (encodedToken) {
      try {
        const resp = await axios.post(`/api/user/likes`, {video}, {
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


  const watchLaterClickHandler = async(encodedToken) => {
    if(encodedToken) {
      try{
        const resp = await axios.post(`/api/user/watchlater`,{video},{
          headers: { authorization: encodedToken },});
          setWatchLater(resp.data.watchlater)
      }catch(err){
        alert(`error from server ${err}`)
      }
    }else{
      navigate("/login");
    }
    }

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
         {watchLater.find((e)=>e._id === video._id) ? 
         <span className="material-icons vicons">watch_later</span> : <span className="material-icons-outlined vicons" onClick={()=> watchLaterClickHandler(encodedToken)}>watch_later</span>}
          
          <span className="material-icons-outlined vicons">playlist_add</span>
        </div>
      </div>
    </div>

    // </div>
  );
};
export  {ViCard};
