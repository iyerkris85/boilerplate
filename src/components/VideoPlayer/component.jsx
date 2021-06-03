/**
 * VideoPlayer Component display Video Player
 */

import React, { useEffect, useRef } from "react";
import videojs from "video.js";

const VideoPlayer = (props) => {
  const { videoSrc } = props;
  const playerRef = useRef();

  useEffect(() => {
    const player = videojs(
      playerRef.current,
      { autoplay: true, muted: true },
      () => {
        player.src(videoSrc);
      }
    );

    return () => {
      player.dispose();
    };
  }, []);

  return (
    <div data-vjs-player>
      <video ref={playerRef} className="video-js vjs-16-9" playsInline />
    </div>
  );
};

export default VideoPlayer;
