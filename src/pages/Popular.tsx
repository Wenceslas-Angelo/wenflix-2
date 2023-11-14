import React from 'react';

import usePopularQuery from '../hooks/usePopularQuery';

import Movies from '../components/Movies';
import Spinner from '../components/Spinner';

const Popular = () => {
  const popularMovies = usePopularQuery();
  if (!popularMovies.data) {
    return <Spinner />;
  }

  return (
    <>
      <Movies
        header="Popular Movies"
        movies={popularMovies}
        isInfiniteScroll={true}
        showGenre={false}
      />
    </>
  );
};

export default Popular;
