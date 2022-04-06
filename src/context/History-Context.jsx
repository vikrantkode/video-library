import { createContext, useContext, useReducer } from "react";
import {historyReducerFunction} from "../reducer/historyReducerFunction"


const HistoryContext = createContext();

const HistoryProvider = ({children}) => {
    const [state, dispatch] = useReducer(historyReducerFunction,{historyArr: []})

    return <HistoryContext.Provider value={{state,dispatch}}>
        {children}
    </HistoryContext.Provider>
}

const useHistory = () => useContext(HistoryContext);

export{useHistory,HistoryProvider}