import React from 'react';

import useSimilarMoviesQuery from '../../hooks/useSimilarMoviequery';

import Movies from '../Movies';

type SimilarMoviesProps = {
  movieId: string;
};

const SimilarMovies = ({ movieId }: SimilarMoviesProps) => {
  const similarMovies = useSimilarMoviesQuery(movieId);

  if (!similarMovies.data) return;

  return (
    <>
      <Movies
        header="Similar Movies"
        movies={similarMovies}
        showBanner={false}
      />
    </>
  );
};

export default SimilarMovies;
