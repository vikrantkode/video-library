const playlistReducerFunction = (state,action) => {
    console.log(state,action)
 switch (action.type) {
     case "CREATE_PLAYLIST":
         return {...state , playlistArr : action.payload }

     case "ADD_VIDEO_TO_PLAYLIST":
         return {...state , playlistArr : action.payload }
    
     case "DELETE_VIDEO_FROM_PLAYLIST":
         console.log("from palyrbdhsn",action.payload.videoId)
         return {...state , playlistArr : state.playlistArr.map((playlist) =>
            playlist._id === action.payload.playlistId ? { ...playlist, videos: playlist.videos.filter((video) => video._id !== action.payload.videoId), } : playlist) }

     case "DELETE_PLAYLIST":
         return {...state , playlistArr : action.payload }
 
     default:
         return state;
 }
}
// state.Playlist.map((playlist) =>
//                     playlist._id === payload.playlistId ? { ...playlist, videos: playlist.videos.filter((video) => video._id !== payload.videoId), } : playlist)

export  {playlistReducerFunction}