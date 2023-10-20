import React from 'react';
import Rating from '../Rating';
import { Genres } from '../../types';

type MovieInfoProps = {
  title: string;
  voteAverage: number;
  genres: Genres[];
  overview: string;
};

const MovieInfo = ({
  title,
  voteAverage,
  genres,
  overview,
}: MovieInfoProps) => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl text-light font-medium mb-2">
        {title}
      </h1>
      <div className="md:flex items-center my-10">
        <Rating voteAverage={voteAverage} ratingType="circle" />
        <Rating voteAverage={voteAverage} ratingType="star" />
        <div className="hidden md:block w-[2px] mx-5 h-10 bg-primary" />
        <div className="">
          <span className="text-xl font-bold text-light">Genres: </span>{' '}
          {genres.map((genre, index) => (
            <span key={genre.id} className="text-light text-lg font-medium">
              {index === genres.length - 1
                ? ` ${genre.name} `
                : `${genre.name}, `}
            </span>
          ))}
        </div>
      </div>
      <p className="text-xl text-light mt-2">{overview}</p>
    </div>
  );
};

export default MovieInfo;
