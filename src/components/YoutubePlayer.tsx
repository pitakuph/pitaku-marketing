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
      // autoplay: 1,
    },
  };

  return ( 
    <YouTube 
      videoId={videoId} 
      opts={opts} 
      className="w-full h-[310px] max-w-4xl sm:min-h-[504px] mt-10" 
      iframeClassName="w-full h-[310px] max-w-4xl sm:min-h-[504px]" 
      />
)
};

export default YouTubePlayer;
