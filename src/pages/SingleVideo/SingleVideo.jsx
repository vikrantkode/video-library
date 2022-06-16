import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  useVideoList,
  useLikeDislike,
  useWatchLater,
} from "../../context/context";
import { Nav } from "../../components/Nav/Nav";
import "./SingleVideo.css";

const SingleVideo = () => {
  const { likeVideoList, likeClickHandler, dislikeClickHandler } =
    useLikeDislike();
  const { watchLater, watchLaterClickHandler, deleteWatchLaterHandler } =
    useWatchLater();
  const { videoId } = useParams();
  const { videoList } = useVideoList();
  const videoToPlay = videoList.find((item) => item._id === videoId);
  return (
    <div className="single_page_container">
      <Nav />
      <div className="single_video_page">
        <Link className="go_to_video_page_link" to="/videos">
          <span className="material-icons">arrow_back</span>
          Back To Recommended Videos
        </Link>
        <iframe
          className="video_style"
          src={`https://www.youtube.com/embed/${videoToPlay._id}`}
          title="YouTube video player"
          width="100%"
          height="500rem"
        ></iframe>
        <div className="card_footer card_footer_singlepage">
          <div className="title">
            <h2 className="title__header">
              {videoToPlay.title} || {videoToPlay.category}
            </h2>
          </div>
          <div className="footer_icons">
            {likeVideoList.some((e) => e._id === videoToPlay._id) ? (
              <span
                className="material-icons vicons"
                onClick={() => dislikeClickHandler(videoToPlay._id)}
              >
                thumb_up
              </span>
            ) : (
              <span
                className="material-icons-outlined vicons"
                onClick={() => likeClickHandler(videoToPlay)}
              >
                thumb_up
              </span>
            )}
            {watchLater.find((e) => e._id === videoToPlay._id) ? (
              <span
                className="material-icons vicons"
                onClick={() => deleteWatchLaterHandler(videoToPlay._id)}
              >
                watch_later
              </span>
            ) : (
              <span
                className="material-icons-outlined vicons"
                onClick={() => watchLaterClickHandler(videoToPlay)}
              >
                watch_later
              </span>
            )}
            {/* <span className="material-icons-outlined vicons">playlist_add</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { SingleVideo };
