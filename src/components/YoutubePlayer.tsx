// components/YouTubePlayer.js

import React from 'react';
import YouTube from 'react-youtube';

type Props = {
    videoId: string;
}

const YouTubePlayer = ({ videoId }:Props) => {
  const opts = {
    // width: '720',
    // height: '480',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return ( 
    <YouTube 
      videoId={videoId} 
      opts={opts} 
      className="w-full h-full min-h-screen sm:min-h-[360px] my-10 sm:my-20" 
      iframeClassName="w-full h-full min-h-screen sm:min-h-[360px]" />
)
};

export default YouTubePlayer;
