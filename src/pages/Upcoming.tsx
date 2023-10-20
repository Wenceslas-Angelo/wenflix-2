import React from 'react';
import Movies from '../components/Movies';
import useUpcomingQuery from '../hooks/useUpcomingQuery';

const Upcoming = () => {
  const upcomingMovies = useUpcomingQuery();
  if (!upcomingMovies.data || upcomingMovies.isPending)
    return <h1>LOADING...</h1>;

  return (
    <>
      <Movies header="Popular Movies" movies={upcomingMovies.data.results} />
    </>
  );
};

export default Upcoming;
