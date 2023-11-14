import React from 'react';
import useTopRatedQuery from '../hooks/useTopRatedQuery';

import Movies from '../components/Movies';
import Spinner from '../components/Spinner';

const TopRated = () => {
  const topRatedMovies = useTopRatedQuery();
  if (!topRatedMovies.data) return <Spinner />;

  return (
    <>
      <Movies header="Top Rated Movies" movies={topRatedMovies} />
    </>
  );
};

export default TopRated;
