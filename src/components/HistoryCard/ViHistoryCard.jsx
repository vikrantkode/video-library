import React from "react";
import { useHistory, useAuth } from "../../context/context";
import "./ViHistoryCard.css";
import axios from "axios"
import { Link } from "react-router-dom";


const ViHistoryCard = ({ video }) => {
  const {state: { encodedToken },} = useAuth();
    const {dispatch} = useHistory();
    
    /** 
     * @param {*} Removes Single video from history page 
     */
    const deleteVideoHandler = async(videoId) =>{
        try{
            const resp = await axios.delete(`/api/user/history/${videoId}`,
            { headers: { authorization: encodedToken },})
            dispatch({type : "REMOVE_FROM_HISTORY", payload : resp.data.history})
        }catch(err){
            console.log(err)
        }
    }
  
  return (
    <div className="card">
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

      <div className="card_footer">
        <button className="btn btn-error_outline"
         onClick={()=>deleteVideoHandler(video._id)}>REMOVE FROM HISTORY</button>
      </div>
    </div>
  );
};
export  {ViHistoryCard};
