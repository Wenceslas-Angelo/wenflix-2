import React from 'react';
import { Movies } from '../../types';
import noImage from '../../assets/no-poster-available.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import MovieResult from './MovieResult';
import { Link } from 'react-router-dom';
import { useSearchStore } from '../../stores/useSearchStore';

type Props = {
  movies: Movies;
};

const ModalResult = ({ movies }: Props) => {
  const { searchTerm } = useSearchStore();

  return (
    <div
      className={`${
        searchTerm.length > 2 ? 'block' : 'hidden'
      } bg-light shadow-lg rounded-md p-2 min-h-screen w-full`}
    >
      {movies.results.slice(0, 10).map((movie) => (
        <MovieResult
          key={movie.id}
          title={movie.title}
          image={
            movie.poster_path
              ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
              : noImage
          }
          movieId={movie.id}
          voteAverage={movie.vote_average}
        />
      ))}
      <div className="my-3 text-xl underline text-center text-customBlue">
        <Link to="/results">View All results</Link>
      </div>
    </div>
  );
};

export default ModalResult;
