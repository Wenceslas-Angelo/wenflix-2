import React from 'react';
import Movies from '../components/Movies';
import usePopularQuery from '../hooks/usePopularQuery';

const Popular = () => {
  const popularMovies = usePopularQuery();
  if (!popularMovies.data || popularMovies.isPending)
    return <h1>LOADING...</h1>;

  return (
    <>
      <Movies header="Popular Movies" movies={popularMovies.data.results} />
    </>
  );
};

export default Popular;
