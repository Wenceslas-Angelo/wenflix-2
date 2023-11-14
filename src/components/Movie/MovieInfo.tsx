import React from 'react';
import Rating from '../Rating';
import { Genre } from '../../types';

type MovieInfoProps = {
  title: string;
  voteAverage: number;
  genres: Genre[];
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
      <h1 className="text-4xl md:text-5xl text-dark font-medium mb-2">
        {title}
      </h1>
      <div className="md:flex items-center my-10">
        <div className="flex flex-start mb-5 flex-wrap md:flex-nowrap">
          <Rating voteAverage={voteAverage} ratingType="circle" />
          <Rating voteAverage={voteAverage} ratingType="star" />
        </div>
        <div className="hidden md:block w-[2px] mx-5 h-10 bg-primary" />
        <div className="">
          <span className="text-xl font-bold text-dark">Genres: </span>{' '}
          {genres.map((genre, index) => (
            <span key={genre.id} className="text-dark text-lg font-medium">
              {index === genres.length - 1
                ? ` ${genre.name} `
                : `${genre.name}, `}
            </span>
          ))}
        </div>
      </div>
      <p className="text-xl text-dark mt-2">{overview}</p>
    </div>
  );
};

export default MovieInfo;
