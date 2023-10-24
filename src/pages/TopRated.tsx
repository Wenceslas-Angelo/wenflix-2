import React from 'react';
import useTopRatedQuery from '../hooks/useTopRatedQuery';

import Movies from '../components/Movies';
import Spinner from '../components/Spinner';

const TopRated = () => {
  const topRatedMovies = useTopRatedQuery();
  if (!topRatedMovies.data || topRatedMovies.isPending) return <Spinner />;

  return (
    <>
      <Movies header="Popular Movies" movies={topRatedMovies.data.results} />
    </>
  );
};

export default TopRated;
