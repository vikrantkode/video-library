import React, { useEffect, useState } from 'react'
import "./Homepage.css"
import {Nav} from '../../components/Nav/Nav'
import hero_img from "../../assets/home_img.jpg"
import { Link } from 'react-router-dom'
import {ViCard} from '../../components/VideoCard/ViCard'
import axios from "axios"


const Homepage = () => {
  const [showVideoList, setShowVideoList] = useState([]);
  useEffect(() => {  
  (async () =>{
   try {
     const resp = await axios.get(`/api/videos`)
     setShowVideoList(resp.data.videos)
     console.log(resp.data.videos)
   } catch (error) {
     console.log(error)
   }
  })();
  },[])
  
  return (
    <div className='container_home'>
      <Nav/>
      <div className='hero_img_container'>
        <img className='hero_img_width' src={hero_img} alt=""  />
        <div className="hero_image_content">
          <h2 className="hero_img_tagline main_tagline">VIDEO LIBRARY </h2>
          <p className="hero_img_tagline sub_tagline">
            Watch, Explore  and  Enjoy
          </p>
          <Link to="/videos">

            <button className="btn btn-default">Watch Now</button>
          </Link>
        </div>
      </div>
  
      {showVideoList.slice(0,4).map((video)=><ViCard key={video._id} video={video}/>)}
    </div>
  )
}

export  {Homepage}