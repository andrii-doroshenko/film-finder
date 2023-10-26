import YouTube from 'react-youtube';
import styled from 'styled-components';

const TrailerWrapper = styled.div`
    padding: 0 15px;
    margin-bottom: 15px;
`

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
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <TrailerWrapper>
      <h3>Official Trailer</h3>
      <YouTube
        videoId={id}
        className="container"
        style={styles}
        title="YouTube Video Trailer"
        opts={opts}
      />
    </TrailerWrapper>
  );
};

export default VideoYouTube;
