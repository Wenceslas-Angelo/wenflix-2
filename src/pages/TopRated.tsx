import React from 'react';
import Movies from '../components/Movies';
import useTopRatedQuery from '../hooks/useTopRatedQuery';

const TopRated = () => {
  const topRatedMovies = useTopRatedQuery();
  if (!topRatedMovies.data || topRatedMovies.isPending)
    return <h1>LOADING...</h1>;

  return (
    <>
      <Movies header="Popular Movies" movies={topRatedMovies.data.results} />
    </>
  );
};

export default TopRated;
