import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom"
import { VideoProvider, AuthProvider, LikeDislikeProvider, WatchLaterProvider, HistoryProvider} 
        from "./context/context";



// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VideoProvider>
          <LikeDislikeProvider>
            <WatchLaterProvider>
              <HistoryProvider>
                <App />
              </HistoryProvider>
            </WatchLaterProvider>
          </LikeDislikeProvider>
        </VideoProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
