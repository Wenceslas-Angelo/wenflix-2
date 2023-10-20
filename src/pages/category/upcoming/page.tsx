'use client';

import React from 'react';
import { useUpcomingQuery } from '@/hooks/useFetchMovies';
import CategoryPage from '../CategoryPage';

const TopRated = () => {
  const upcomingMovies = useUpcomingQuery();
  return (
    <div>
      <CategoryPage movies={upcomingMovies} />
    </div>
  );
};

export default TopRated;
