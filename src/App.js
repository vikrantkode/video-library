import {Route, Routes} from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage";
import Mockman from "mockman-js"
import VideoListing from "./pages/VideoListing/VideoListing";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import LikeDislike from "./pages/LikeDislike/LikeDislike";


function App() {
  return (
  <div className = "App" >
    <Routes>
      <Route path = "/"element = {<Homepage/>}/> 
      <Route path = "/mock" element = {<Mockman />}/> 
      <Route path = "/videos" element = {<VideoListing />}/> 
      <Route path = "/login" element = {<LoginPage />}/> 
      <Route path = "/like/dislike" element = {<LikeDislike />}/> 

    </Routes>
  </div>
  )
}

export default App;
