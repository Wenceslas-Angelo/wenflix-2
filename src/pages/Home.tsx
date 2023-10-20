import React from 'react';

// Hooks
import usePopularQuery from '../hooks/usePopularQuery';
import useUpcomingQuery from '../hooks/useUpcomingQuery';
import useTopRatedQuery from '../hooks/useTopRatedQuery';

// Components
import Movies from '../components/Movies';

const Home = () => {
  const popularMovies = usePopularQuery();
  const upcomingMovies = useUpcomingQuery();
  const topRatedMovies = useTopRatedQuery();

  return (
    <>
      {popularMovies.data ? (
        <Movies
          header="Popular Movies"
          movies={popularMovies.data.results.slice(0, 10)}
          moreLink="popular"
        />
      ) : null}

      {upcomingMovies.data ? (
        <Movies
          header="Upcoming Movies"
          movies={upcomingMovies.data.results.slice(0, 10)}
          moreLink="upcoming"
        />
      ) : null}

      {topRatedMovies.data ? (
        <Movies
          header="Top rated Movies"
          movies={topRatedMovies.data.results.slice(0, 10)}
          moreLink="topRated"
        />
      ) : null}
    </>
  );
};

export default Home;
