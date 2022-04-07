import {Route, Routes} from "react-router-dom"
import {Homepage} from "./pages/Homepage/Homepage";
import Mockman from "mockman-js"
import {VideoListing} from "./pages/VideoListing/VideoListing";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {LikeDislike} from "./pages/LikeDislike/LikeDislike";
import {WatchLater} from "./pages/WatchLater/WatchLater";
import { History } from "./pages/History/History";
import { SingleVideo } from "./pages/SingleVideo/SingleVideo";
import { Playlist } from "./pages/Playlist/Playlist";


function App() {
  return (
  <div className = "App" >
    <Routes>
      <Route path = "/"element = {<Homepage/>}/> 
      <Route path = "/mock" element = {<Mockman />}/> 
      <Route path = "/videos" element = {<VideoListing />}/> 
      <Route path = "/videos/:videoId" element = {<SingleVideo />}/> 
      <Route path = "/login" element = {<LoginPage />}/> 
      <Route path = "/like/dislike" element = {<LikeDislike />}/> 
      <Route path = "/watchLater" element = {<WatchLater />}/> 
      <Route path = "/history" element = {<History />}/> 
      <Route path = "/playlist" element = {<Playlist />}/> 

    </Routes>
  </div>
  )
}

export  {App};
