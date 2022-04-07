import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth} from "./context";

const LikeDislikeContext = createContext();

const LikeDislikeProvider = ({ children }) => {
    const [likeVideoList, setLikeVideoList] = useState([]);
    const { state: { encodedToken },} = useAuth();
    const navigate = useNavigate();

    const likeClickHandler = async (video) => {
      if (encodedToken) {
        try {
          const resp = await axios.post( `/api/user/likes`,{video},
            { headers: { authorization: encodedToken },}
          );
          setLikeVideoList(resp.data.likes);
        } catch (err) {
          alert(`error from server ${err}`);
        }
      } else {
        navigate("/login");
      }
    };
  
    const dislikeClickHandler = async(videoId) => {
      if (encodedToken) {
        try {
          const resp = await axios.delete(`/api/user/likes/${videoId}`, {
            headers: { authorization: encodedToken },
          });
          setLikeVideoList(resp.data.likes) 
        } catch (err) {
          alert(`error from server ${err}`)
        }
      } else {
        navigate("/login");
      }
    };
  
 
  return <LikeDislikeContext.Provider 
          value={{likeVideoList, setLikeVideoList,likeClickHandler,dislikeClickHandler}}>
      {children}
      </LikeDislikeContext.Provider>;
};

const useLikeDislike = () => useContext(LikeDislikeContext);

export { useLikeDislike, LikeDislikeProvider };
