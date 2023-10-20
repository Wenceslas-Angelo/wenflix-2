'use client';

import React from 'react';
import { useTopRatedQuery } from '@/hooks/useFetchMovies';
import CategoryPage from '../CategoryPage';

const TopRated = () => {
  const topRatedMovies = useTopRatedQuery();
  return (
    <div>
      <CategoryPage movies={topRatedMovies} />
    </div>
  );
};

export default TopRated;
