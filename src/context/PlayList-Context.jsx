import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth} from "./context";
import axios from "axios"

const PlaylistContext = createContext();

const PlaylistProvider = ({children}) =>{
    const [playListName, setPlayListName] = useState([]);
    const [modalVisibility,setModalVisibility] = useState(false)
    const { state: { encodedToken },} = useAuth();
    const navigate = useNavigate();

    const addPlaylist = async(title) =>{
        if(encodedToken){
            try{
                const resp = await axios.post(`/api/user/playlists`,{
                    playlist: {title: title, description:"Default playlist" }},
                    {headers: { authorization: encodedToken },})
                 console.log(resp)
                 setPlayListName(resp.data.playlists)
                 setModalVisibility(false)
            }catch(err){
                console.log(`error from server ${err}`)
            }
        }else{
            navigate("/login")
        }
    }
    const deletePlaylist = async (playlist) => {
        console.log(playlist)
        try {   
          const resp = await axios.delete(`/api/user/playlists/${playlist._id}`,
           {headers: { authorization: encodedToken },});
           setPlayListName(resp.data.playlists)
        } catch (err) {
          console.log(`error from server ${err}`);
        }
      };

    const addVideoInPlaylist = async(video , playlist) =>{
        if(encodedToken){
            try{
                const resp = await axios.post(`/api/user/playlists/${playlist._id}`,
                    {video},
                    {headers: { authorization: encodedToken },})
                 console.log(resp)
                 setPlayListName(resp.data.playlists)
                 setModalVisibility(false)
            }catch(err){
                console.log(`error from server ${err}`)
            }
        }else{
            navigate("/login")
        }
    }

    return  <PlaylistContext.Provider
        value={{playListName, setPlayListName, addPlaylist,modalVisibility,setModalVisibility,addVideoInPlaylist,deletePlaylist}}>
            {children}
        </PlaylistContext.Provider>
}

const usePlaylistContext = () => useContext(PlaylistContext)

export {usePlaylistContext, PlaylistProvider}