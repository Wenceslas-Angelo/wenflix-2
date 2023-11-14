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
        movies={popularMovies}
        moreLink="popular"
        showBanner={false}
        showGenre={false}
        isInfiniteScroll={false}
      />

      <Movies
        header="Upcoming Movies"
        movies={upcomingMovies}
        moreLink="upcoming"
        showBanner={false}
        showGenre={false}
        isInfiniteScroll={false}
      />

      <Movies
        header="Top rated Movies"
        movies={topRatedMovies}
        moreLink="topRated"
        showBanner={false}
        showGenre={false}
        isInfiniteScroll={false}
      />
    </>
  );
};

export default Home;
