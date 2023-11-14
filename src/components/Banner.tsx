import React from 'react';

// Utils
import Rating from './Rating';
import formatDate from '../utils/formatDate';

type BannerProps = {
  title: string;
  overview: string;
  image: string;
  voteAverage: number;
  releaseDate: string;
};

const Banner = ({
  title,
  overview,
  image,
  voteAverage,
  releaseDate,
}: BannerProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="mx-3 mb-3 rounded-lg mt-2 min-h-[150vh] sm:min-h-screen relative"
    >
      <div className="  ">
        <div className="absolute bottom-10 max-w-3xl bg-secondary/80 mx-2 p-2 sm:mx-4 sm:p-4 rounded-lg">
          <h1 className="text-4xl md:text-5xl text-light font-medium mb-2">
            {title}
          </h1>
          <div className="sm:flex items-center justify-start my-5">
            <div className="flex justify-start ">
              <Rating ratingType="star" voteAverage={voteAverage} />
            </div>
            <div className="hidden sm:block w-[2px] mx-5 h-10 bg-light" />
            <div className="text-light text-xl font-semibold my-5 sm:my-0">
              {formatDate(releaseDate)}
            </div>
          </div>
          <p className="text-lg sm:text-xl text-light mt-2">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
