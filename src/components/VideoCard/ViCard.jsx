import React from "react";
import "./ViCard.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth, useLikeDislike, useWatchLater, useHistory, usePlaylistContext }
        from "../../context/context";
import { Modal } from "../../components/Modal/Modal";

 


const ViCard = ({ video }) => {
  const { likeVideoList, likeClickHandler,dislikeClickHandler } = useLikeDislike();
  const { watchLater, watchLaterClickHandler,deleteWatchLaterHandler} = useWatchLater();
  const { state: { encodedToken },} = useAuth();
  const {dispatch} = useHistory();

 
  const {modalVisibility,setModalVisibility} = usePlaylistContext();

  const addToHistoryClickHandler = async(video) =>{
    try{
      const resp = await axios.post(`/api/user/history`,{video},
      { headers: { authorization: encodedToken },})
      dispatch({type : "ADD_TO_HISTORY", payload : resp.data.history})
    }catch(err){
      console.log(`error from server ${err}`)
    }
  }

  return (
    <div className="card">

      <div className="main_card_content" onClick={()=>addToHistoryClickHandler(video)}>
        <Link to={`/videos/${video._id}`}>
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
        </Link>
      </div>

      <div className="card_footer">
        <div className="footer_info">
          <span className="btn-footer">{video.views} views</span>
          <span className="btn-footer">{video.uploaded} hours ago</span>
        </div>

        <div className="footer_icons">
          {likeVideoList.some((e) => e._id === video._id) ? (
            <span className="material-icons vicons"
             onClick={() => dislikeClickHandler(video._id)}>thumb_up</span>
          ) : (
            <span
              className="material-icons-outlined vicons"
              onClick={() => likeClickHandler(video)}
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
              onClick={() => watchLaterClickHandler(video)}
            >
              watch_later
            </span>
          )}

          <span className="material-icons-outlined vicons" 
          onClick={()=>setModalVisibility(!modalVisibility)}>playlist_add</span>

          {modalVisibility && <div className="playlist_card_position"><Modal /></div>}  

        </div>
      </div>
    </div>

    // </div>
  );
};
export { ViCard };
