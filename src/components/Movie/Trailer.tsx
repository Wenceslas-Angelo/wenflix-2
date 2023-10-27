import React from 'react';
import { FaTimes } from 'react-icons/fa';
import YouTube, { YouTubeProps } from 'react-youtube';
import { useShowTrailerStore } from '../../stores/useShowTraillerStore';

type Props = {
  videoId: string;
};

const Trailer = ({ videoId }: Props) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const { showTrailer, trailerNotVisible } = useShowTrailerStore();

  return (
    <>
      {showTrailer ? (
        <div className="fixed h-screen w-full top-0 left-0 bg-black/80 z-50 flex justify-center items-center">
          <button
            onClick={() => trailerNotVisible()}
            className="absolute right-2 top-2 text-5xl cursor-pointer p-3 text-rose-600"
          >
            <FaTimes />
          </button>
          <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
        </div>
      ) : null}
    </>
  );
};

export default Trailer;
