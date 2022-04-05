import { createContext, useContext, useState } from "react";


const LikeDislikeContext = createContext();

const LikeDislikeProvider = ({ children }) => {
    const [likeVideoList, setLikeVideoList] = useState([]);
 
  return <LikeDislikeContext.Provider value={{likeVideoList, setLikeVideoList}}>
      {children}
      </LikeDislikeContext.Provider>;
};

const useLikeDislike = () => useContext(LikeDislikeContext);

export { useLikeDislike, LikeDislikeProvider };
