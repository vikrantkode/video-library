import { createContext,useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth} from "./context";


const WatchLaterContext = createContext();

const WatchLaterProvider = ({children}) => {
    const [watchLater, setWatchLater] = useState([]);
    const { state: { encodedToken },} = useAuth();
    const navigate = useNavigate();

    const watchLaterClickHandler = async (video) => {
        if (encodedToken) {
          try {
            const resp = await axios.post( `/api/user/watchlater`,{ video },
              {
                headers: { authorization: encodedToken },
              }
            );
            setWatchLater(resp.data.watchlater);
          } catch (err) {
            alert(`error from server ${err}`);
          }
        } else {
          navigate("/login");
        }
      };
    
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
        <WatchLaterContext.Provider value=
        {{watchLater, setWatchLater,watchLaterClickHandler,deleteWatchLaterHandler }}>
            {children}
        </WatchLaterContext.Provider>
 )   
    
}

const useWatchLater = () => useContext(WatchLaterContext)

export {useWatchLater,WatchLaterProvider} 