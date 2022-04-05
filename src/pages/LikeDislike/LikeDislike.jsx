import React from 'react'
import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'
import ViLikeCard from '../../components/LikeCard/ViLikeCard'
import { useLikeDislike } from '../../context/context';
import axios from  "axios"
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../../context/context"


const LikeDislike = () => {
    const {likeVideoList, setLikeVideoList} = useLikeDislike();
    const navigate = useNavigate();
    const {state: { encodedToken },} = useAuth();   
    const dislikeClickHandler = async(videoId) => {
    if (encodedToken) {
      try {
        const resp = await axios.delete(`/api/user/likes/${videoId}`, {
          headers: { authorization: encodedToken },
        });
        console.log(resp.data.likes);
        setLikeVideoList(resp.data.likes)
        
      } catch (err) {
        alert(`error from server ${err}`)
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className='container_videolist '>
        <Nav/>
        <Sidebar />
        <div className="parent">        
        {likeVideoList.map((video)=><ViLikeCard item={video._id} video ={video} dislikeClickHandler={dislikeClickHandler}/>)}
        </div>
    </div>
  )
}

export default LikeDislike