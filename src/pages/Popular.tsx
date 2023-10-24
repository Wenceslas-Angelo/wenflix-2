import React from 'react';

import usePopularQuery from '../hooks/usePopularQuery';

import Movies from '../components/Movies';
import Spinner from '../components/Spinner';

const Popular = () => {
  const popularMovies = usePopularQuery();
  if (!popularMovies.data || popularMovies.isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Movies header="Popular Movies" movies={popularMovies.data.results} />
    </>
  );
};

export default Popular;
