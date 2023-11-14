import React from 'react';

// Hooks
import useCategoryMoviesQuery from '../hooks/useCategoryMoviesQuery';

// Components
import Movies from '../components/Movies';
import Spinner from '../components/Spinner';

const Home = () => {
  const popularMovies = useCategoryMoviesQuery('popular');
  const upcomingMovies = useCategoryMoviesQuery('upcoming');
  const topRatedMovies = useCategoryMoviesQuery('top rated');

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
        isInfiniteScroll={false}
      />

      <Movies
        header="Upcoming Movies"
        movies={upcomingMovies}
        moreLink="upcoming"
        showBanner={false}
        isInfiniteScroll={false}
      />

      <Movies
        header="Top rated Movies"
        movies={topRatedMovies}
        moreLink="topRated"
        showBanner={false}
        isInfiniteScroll={false}
      />
    </>
  );
};

export default Home;
