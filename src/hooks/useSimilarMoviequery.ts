import { useInfiniteQuery } from '@tanstack/react-query';

import { getSimilarMovies } from '../api';
import { Movies } from '../types';

const useSimilarMovieQuery = (movieId: string) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<Movies>({
      queryKey: ['similar'],
      initialPageParam: 1,
      queryFn: ({ pageParam }) => getSimilarMovies(pageParam, movieId),
      getNextPageParam: (lastPage) => lastPage.page + 1,
    });
  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useSimilarMovieQuery;
