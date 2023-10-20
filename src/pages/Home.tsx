import React from 'react';

// Hooks
import usePopularQuery from '../hooks/usePopularQuery';
import useUpcomingQuery from '../hooks/useUpcomingQuery';
import useTopRatedQuery from '../hooks/useTopRatedQuery';

// Components
import MoviesOverview from '../components/MoviesOverview';

const Home = () => {
  const popularMovies = usePopularQuery();
  const upcomingMovies = useUpcomingQuery();
  const topRatedMovies = useTopRatedQuery();

  return (
    <div>
      {popularMovies.data ? (
        <MoviesOverview
          header="Popular Movies"
          movies={popularMovies.data.results.slice(0, 10)}
          moreLink="popular"
        />
      ) : null}

      {upcomingMovies.data ? (
        <MoviesOverview
          header="Upcoming Movies"
          movies={upcomingMovies.data.results.slice(0, 10)}
          moreLink="upcoming"
        />
      ) : null}

      {topRatedMovies.data ? (
        <MoviesOverview
          header="Top rated Movies"
          movies={topRatedMovies.data.results.slice(0, 10)}
          moreLink="topRated"
        />
      ) : null}
    </div>
  );
};

export default Home;
