import {Route, Routes} from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage";
import Mockman from "mockman-js"
import VideoListing from "./pages/VideoListing/VideoListing";

function App() {
  return (
  <div className = "App" >
    <Routes>
      <Route path = "/"element = {<Homepage/>}/> 
      <Route path = "/mock" element = {<Mockman />}/> 
      <Route path = "/videos" element = {<VideoListing />}/> 
    </Routes>
  </div>
  )
}

export default App;
