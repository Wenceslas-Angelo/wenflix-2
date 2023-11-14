import React from 'react';
import { useParams } from 'react-router-dom';
import useGenreMoviesQuery from '../hooks/useGenreMoviesQuery';
import Movies from '../components/Movies';

const Genre = () => {
  const params = useParams();
  const movies = useGenreMoviesQuery(params.genreId ? params.genreId : '28');
  return (
    <>
      <Movies
        header={`${params.genreName} Movies`}
        movies={movies}
        isInfiniteScroll={true}
      />
    </>
  );
};

export default Genre;
