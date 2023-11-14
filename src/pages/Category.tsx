import React from 'react';
import { useParams } from 'react-router-dom';
import Movies from '../components/Movies';
import useCategoryMoviesQuery from '../hooks/useCategoryMoviesQuery';

const Category = () => {
  const params = useParams();
  const movies = useCategoryMoviesQuery(params.name ? params.name : 'popular');
  return (
    <>
      <Movies
        header={`${params.name} Movies`}
        movies={movies}
        isInfiniteScroll={true}
      />
    </>
  );
};

export default Category;
