import React from "react";
import "./WatchLater.css";
import axios from  "axios"
import { Nav } from "../../components/Nav/Nav";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useWatchLater, useAuth } from "../../context/context";
import { useNavigate } from 'react-router-dom';
import { ViWatchLaterCard } from "../../components/WatchLaterCard/WatchLaterCard";

const WatchLater = () => {
  const { watchLater, setWatchLater } = useWatchLater();
  const {state: { encodedToken },} = useAuth(); 
  const navigate = useNavigate();

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
    return(
        <div className="container_watchlater ">
            <Nav />
            <Sidebar />
                <div className="parent">
                 {watchLater.map((video) =><ViWatchLaterCard key={video._id} video={video} deleteWatchLaterHandler={deleteWatchLaterHandler}/>)}
                </div>
        </div>
    )
  
};

export { WatchLater };
