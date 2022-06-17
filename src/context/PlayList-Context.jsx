import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth} from "./context";
import axios from "axios"
import { useReducer } from "react";
import { playlistReducerFunction } from "../reducer/playlistReducerFunction";

const PlaylistContext = createContext();


const PlaylistProvider = ({children}) =>{
    const [ playlistState, playlistDispatch] = useReducer(playlistReducerFunction,{playlistArr:[]})
    const { state: { encodedToken },} = useAuth();
    const navigate = useNavigate();



    const createPlaylist = async(playlistTitleName) =>{
        if(encodedToken){
            try{
                const resp = await axios.post(`/api/user/playlists`,{
                    playlist: {title: playlistTitleName, description:"Default playlist" }},
                    {headers: { authorization: encodedToken },})
                 playlistDispatch({type : "CREATE_PLAYLIST",  payload : resp.data.playlists})
            }catch(err){
                console.log(`error from server ${err}`)
            }
        }else{
            navigate("/login")
        }
    }
    const deletePlaylist = async (playlist) => {
        try {   
          const resp = await axios.delete(`/api/user/playlists/${playlist._id}`,
           {headers: { authorization: encodedToken },});
           playlistDispatch({type: "DELETE_PLAYLIST", payload : resp.data.playlists})
        } catch (err) {
          console.log(`error from server ${err}`);
        }
      };

    const addVideoInPlaylist = async(playlist,video) =>{
        if(encodedToken){
            try{
                const resp = await axios.post(`/api/user/playlists/${playlist._id}`,
                    {video},
                    {headers: { authorization: encodedToken },})
                    playlistDispatch({type :"ADD_VIDEO_TO_PLAYLIST", payload: resp.data.playlists})
            }catch(err){
                console.log(`error from server ${err}`)
            }
        }else{
            navigate("/login")
        }
    }

    return ( <PlaylistContext.Provider
        value={{playlistState, playlistDispatch ,createPlaylist,addVideoInPlaylist,deletePlaylist}}>
            {children}
        </PlaylistContext.Provider>)
}

const usePlaylistContext = () => useContext(PlaylistContext)

export {usePlaylistContext, PlaylistProvider}