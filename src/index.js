import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom"
import { VideoProvider, AuthProvider, LikeDislikeProvider, WatchLaterProvider, HistoryProvider} 
        from "./context/context";
import { PlaylistProvider } from "./context/PlayList-Context";



// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VideoProvider>
          <PlaylistProvider>
            <LikeDislikeProvider>
              <WatchLaterProvider>
                <HistoryProvider>
                  <App />
                </HistoryProvider>
              </WatchLaterProvider>
            </LikeDislikeProvider>
          </PlaylistProvider>
        </VideoProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
