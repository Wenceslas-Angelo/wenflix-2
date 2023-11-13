import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating';
import { useModalSearchStore } from '../../stores/useModalSearchStore';

type Props = {
  movieId: number;
  image: string;
  title: string;
  voteAverage: number;
};

const MovieResult = ({ image, title, movieId, voteAverage }: Props) => {
  const { toggle } = useModalSearchStore();
  return (
    <Link
      to={`/movie/${movieId}`}
      className="flex justify-between items-center my-2 hover:bg-gray-300 rounded-md"
      onClick={() => toggle(false)}
    >
      <div className="flex">
        <img src={image} alt={title} className="w-10" />
        <div className="ml-2">
          <h2 className="text-xl">{title}</h2>
          <div className="flex flex-start">
            <Rating ratingType="star" voteAverage={voteAverage} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieResult;
