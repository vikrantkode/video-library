const playlistReducerFunction = (state,action) => {
    console.log(state,action)
 switch (action.type) {
     case "CREATE_PLAYLIST":
         return {...state , playlistArr : action.payload }

     case "ADD_VIDEO_TO_PLAYLIST":
         return {...state , playlistArr : action.payload }
    
     case "DELETE_VIDEO_FROM_PLAYLIST":
         return {...state , playlistArr : action.payload }

     case "DELETE_PLAYLIST":
         return {...state , playlistArr : action.payload }
 
     default:
         return state;
 }
}

export  {playlistReducerFunction}