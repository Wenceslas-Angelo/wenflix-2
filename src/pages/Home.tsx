import React from 'react';

// Hooks
import usePopularQuery from '../hooks/usePopularQuery';
import useUpcomingQuery from '../hooks/useUpcomingQuery';
import useTopRatedQuery from '../hooks/useTopRatedQuery';

// Components
import Movies from '../components/Movies';
import Spinner from '../components/Spinner';

const Home = () => {
  const popularMovies = usePopularQuery();
  const upcomingMovies = useUpcomingQuery();
  const topRatedMovies = useTopRatedQuery();

  if (!popularMovies.data || !upcomingMovies.data || !topRatedMovies.data) {
    return <Spinner />;
  }

  return (
    <>
      <Movies
        header="Popular Movies"
        movies={popularMovies.data.results.slice(0, 10)}
        moreLink="popular"
        showBanner={false}
        showGenre={false}
      />

      <Movies
        header="Upcoming Movies"
        movies={upcomingMovies.data.results.slice(0, 10)}
        moreLink="upcoming"
        showBanner={false}
        showGenre={false}
      />

      <Movies
        header="Top rated Movies"
        movies={topRatedMovies.data.results.slice(0, 10)}
        moreLink="topRated"
        showBanner={false}
        showGenre={false}
      />
    </>
  );
};

export default Home;
