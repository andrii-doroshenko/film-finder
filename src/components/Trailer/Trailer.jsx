import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const VideoYouTube = ({ id }) => {
  const opts = {
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      preload: 'metadata',
    },
  };

  const styles = {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    paddingTop: '56.25%',
  };

  const StyledYouTube = styled(YouTube)`
    & .responsive-iframe {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  `;

  return (
    <StyledYouTube
      videoId={id}
      className="container"
      iframeClassName={'responsive-iframe'}
      style={styles}
      title="YouTube Video Trailer"
      loading="Loading..."
      opts={opts}
    />
  );
};

export default VideoYouTube;
