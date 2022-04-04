import {Route, Routes} from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage";
import Mockman from "mockman-js"

function App() {
  return (
  <div className = "App" >
    <Routes>
      <Route path = "/"element = {<Homepage/>}/> 
      <Route path = "/mock" element = {<Mockman />}/> 
    </Routes>
  </div>
  )
}

export default App;
