import React from 'react';
import useUpcomingQuery from '../hooks/useUpcomingQuery';
import Movies from '../components/Movies';
import Spinner from '../components/Spinner';

const Upcoming = () => {
  const upcomingMovies = useUpcomingQuery();
  if (!upcomingMovies.data) return <Spinner />;

  return (
    <>
      <Movies header="Popular Movies" movies={upcomingMovies} />
    </>
  );
};

export default Upcoming;
