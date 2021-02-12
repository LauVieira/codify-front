import React from 'react';
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';

export default function YoutubePlayer({ link }) {
  const videoId = getYouTubeID(link);

  function videoOnReady(event) {
    const player = event.target;

    player.pauseVideo();
  }

  function videoOnError() {
    alert('Não foi possível carregar o vídeo...');
  }

  const opts = {
    height: '488',
    width: '800',
    playerVars: {
      autoplay: 0,
      controls: 2,
      enablejsapi: 1,
      rel: 0,
      showinfo: 0,
      origin: (process.env.DEPLOY_LINK || 'http://localhost:9000'),
    },
  };

  return (
    <YouTube
      videoId={videoId}
      className="styled-youtube"
      opts={opts}
      onReady={videoOnReady}
      onError={videoOnError}
    />
  );
}
