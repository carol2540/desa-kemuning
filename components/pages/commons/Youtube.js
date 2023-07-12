import YouTube from 'react-youtube';

const YouTubeVideo = ({ videoId, ...rest }) => {
  const opts = {
    width: '100%',
  };

  return <YouTube videoId={videoId} opts={opts} {...rest}/>;
};

export default YouTubeVideo;
