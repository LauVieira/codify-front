import React from 'react';
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';

export default function YoutubePlayer({ link }) {
  const videoId = getYouTubeID(link);

  function videoOnReady(event) {
    // acess to player in all event handlers via event.target
    const player = event.target;
    player.pauseVideo();
    // player.seekTo();
    // console.log(player);
  }

  function videoStateChange(event) {
    const player = event.target;
    console.log(player.getCurrentTime());
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={() => console.log('ON READY CALLBACK'))}
      onStateChange={() => console.log('ON STATE CHANGE')}
      onPlay={() => console.log('ON PLAY CALLBACK')}
      onPause={() => console.log('ON PAUSE CALLBACK')}
      onStart={() => console.log('ON START CALLBACK')}
      onError={() => console.log('ON ERROR CALLBACK')}
    />
  );
}

/*const StyledYoutube = styled()`

`;*/