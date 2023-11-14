import { useInfiniteQuery } from '@tanstack/react-query';

import { getMoviesByCategory } from '../api';
import { Movies } from '../types';

const useCategoryMoviesQuery = (categoryName: string) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<Movies>({
      queryKey: ['category', categoryName],
      initialPageParam: 1,
      queryFn: ({ pageParam }) => getMoviesByCategory(pageParam, categoryName),
      getNextPageParam: (lastPage) => lastPage.page + 1,
    });
  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useCategoryMoviesQuery;
