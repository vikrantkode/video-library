import React from 'react'
import "./History.css"
import axios from "axios"
import { Nav } from '../../components/Nav/Nav'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { ViHistoryCard } from '../../components/HistoryCard/ViHistoryCard'
import { useHistory, useAuth } from '../../context/context'
import { useNavigate } from 'react-router-dom'

const History = () => {
    const {state:{historyArr}} = useHistory();
    const {state: { encodedToken },} = useAuth();
    const {dispatch} = useHistory();
    const navigate = useNavigate();

    /** 
     * @param {*} Removes All video from history page 
     */
    const clearAllClickHandler = async() =>{
        if(encodedToken){
            try{
                const resp = await axios.delete(`/api/user/history/all`,
                { headers: { authorization: encodedToken },})
                dispatch({type : "CLEAR_ALL_FROM_HISTORY", payload : resp.data.history})
            }catch(err){
                alert(`error from server ${err}`)
            }
        }else{
            navigate("/login");
        }
    }
  return (
    <div className="container_history ">
    <Nav />
    <Sidebar />
        <div className="btn_history_container">
            <button className="btn btn-error" onClick={()=>clearAllClickHandler()}>CLEAR HISTORY</button>
        </div>
        <div className="parent">
         {historyArr.map((video)=><ViHistoryCard key={video._id} video={video}/>)}
        </div>
</div>
  )
}

export  {History}