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
        background: `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.6) 41%,
        rgba(0, 0, 0, 1) 100%
      ),
      url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="mx-3 mb-3 rounded-lg mt-2 min-h-screen relative"
    >
      <div className="mx-auto p-5">
        <div className="absolute bottom-10 max-w-3xl">
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
