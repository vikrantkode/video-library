import { createContext, useContext, useEffect, useState } from "react";
import axios  from "axios"


const VideoContext = createContext();

const VideoProvider = ({children}) =>{
    const [videoList, setVideoList] = useState([]);
  
    const getVideo = async() =>{
        try {
            const resp = await axios.get(`/api/videos`)
            console.log(resp.data.videos)
            setVideoList(resp.data.videos)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getVideo();
    }, [])

      return(
    <VideoContext.Provider value={{videoList, setVideoList}}>
        {children}
    </VideoContext.Provider>
      )
}



const useVideoList = () => useContext(VideoContext)

export {useVideoList, VideoProvider}