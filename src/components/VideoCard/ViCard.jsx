import React from "react";
import "./ViCard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth, useLikeDislike, useWatchLater, useHistory } from "../../context/context";

const ViCard = ({ video }) => {
  const { likeVideoList, setLikeVideoList } = useLikeDislike();
  const { watchLater, setWatchLater } = useWatchLater();
  const { state: { encodedToken },} = useAuth();
  const {dispatch} = useHistory();
  const navigate = useNavigate();



  const likeClickHandler = async (encodedToken) => {
    if (encodedToken) {
      try {
        const resp = await axios.post(
          `/api/user/likes`,
          { video },
          {
            headers: { authorization: encodedToken },
          }
        );
        setLikeVideoList(resp.data.likes);
      } catch (err) {
        alert(`error from server ${err}`);
      }
    } else {
      navigate("/login");
    }
  };

  const dislikeClickHandler = async(videoId) => {
    if (encodedToken) {
      try {
        const resp = await axios.delete(`/api/user/likes/${videoId}`, {
          headers: { authorization: encodedToken },
        });
        setLikeVideoList(resp.data.likes) 
      } catch (err) {
        alert(`error from server ${err}`)
      }
    } else {
      navigate("/login");
    }
  };

  const watchLaterClickHandler = async (encodedToken) => {
    if (encodedToken) {
      try {
        const resp = await axios.post(
          `/api/user/watchlater`,
          { video },
          {
            headers: { authorization: encodedToken },
          }
        );
        setWatchLater(resp.data.watchlater);
      } catch (err) {
        alert(`error from server ${err}`);
      }
    } else {
      navigate("/login");
    }
  };

  const deleteWatchLaterHandler = async(videoId) => {
    if(encodedToken){
        try{
          const resp = await axios.delete(`/api/user/watchlater/${videoId}`,{
              headers: { authorization: encodedToken }})
              setWatchLater(resp.data.watchlater)
        }catch(err){
            alert(`error from server ${err}`)
        }       
    }else {
        navigate("/login")
    }
}

  const addToHistoryClickHandler = async(video) =>{
    try{
      const resp = await axios.post(`/api/user/history`,{video},
      { headers: { authorization: encodedToken },})
      console.log(resp);
      dispatch({type : "ADD_TO_HISTORY", payload : resp.data.history})
    }catch(err){
      console.log(`error from server ${err}`)
    }
  }

  return (
    <div className="card">

      <div className="main_card_content" onClick={()=>addToHistoryClickHandler(video)}>
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
      </div>

      <div className="card_footer">
        <div className="footer_info">
          <span className="btn-footer">{video.views} views</span>
          <span className="btn-footer">{video.uploaded} hours ago</span>
        </div>

        <div className="footer_icons">
          {likeVideoList.find((e) => e._id === video._id) ? (
            <span class="material-icons vicons"
             onClick={() => dislikeClickHandler(video._id)}>thumb_up</span>
          ) : (
            <span
              className="material-icons-outlined vicons"
              onClick={() => likeClickHandler(encodedToken)}
            >
              thumb_up
            </span>
          )}
          {watchLater.find((e) => e._id === video._id) ? (
            <span className="material-icons vicons"
            onClick={()=>deleteWatchLaterHandler(video._id)}>watch_later</span>
          ) : (
            <span
              className="material-icons-outlined vicons"
              onClick={() => watchLaterClickHandler(encodedToken)}
            >
              watch_later
            </span>
          )}

          <span className="material-icons-outlined vicons">playlist_add</span>
        </div>
      </div>
    </div>

    // </div>
  );
};
export { ViCard };
