'use client';

import React from 'react';
import { usePopularQuery } from '@/hooks/useFetchMovies';
import CategoryPage from '../CategoryPage';

const Popular = () => {
  const popularMovies = usePopularQuery();

  return (
    <div>
      <CategoryPage movies={popularMovies} />
    </div>
  );
};

export default Popular;
