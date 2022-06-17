const playlistReducerFunction = (state,action) => {
 switch (action.type) {
     case "CREATE_PLAYLIST":
         return {...state , playlistArr : action.payload }

     case "ADD_VIDEO_TO_PLAYLIST":
         return {...state , playlistArr : action.payload }
    
     case "DELETE_VIDEO_FROM_PLAYLIST":
         return {...state , playlistArr : state.playlistArr.map((playlist) =>
            playlist._id === action.payload.playlistId ? { ...playlist, videos: playlist.videos.filter((video) => video._id !== action.payload.videoId), } : playlist) }

     case "DELETE_PLAYLIST":
         return {...state , playlistArr : action.payload }
 
     default:
         return state;
 }
}

export  {playlistReducerFunction}