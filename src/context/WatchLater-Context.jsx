import { createContext,useContext, useState } from "react";


const WatchLaterContext = createContext();

const WatchLaterProvider = ({children}) => {
    const [watchLater, setWatchLater] = useState([]);

    return( 
        <WatchLaterContext.Provider value={{watchLater, setWatchLater}}>
            {children}
        </WatchLaterContext.Provider>
 )   
    
}

const useWatchLater = () => useContext(WatchLaterContext)

export {useWatchLater,WatchLaterProvider} 