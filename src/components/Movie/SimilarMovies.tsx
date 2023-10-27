import React from 'react';

import useSimilarMoviesQuery from '../../hooks/useSimilarMoviequery';

import Movies from '../Movies';

type SimilarMoviesProps = {
  movieId: number;
};

const SimilarMovies = ({ movieId }: SimilarMoviesProps) => {
  const similarMovies = useSimilarMoviesQuery(movieId);

  if (!similarMovies.data) return;

  return (
    <>
      <Movies
        header="Similar Movies"
        movies={similarMovies.data.results}
        showBanner={false}
      />
    </>
  );
};

export default SimilarMovies;
