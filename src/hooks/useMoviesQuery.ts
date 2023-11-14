import { useInfiniteQuery } from '@tanstack/react-query';

import { Movies } from '../types';

const useMoviesQuery = (
  moviesKey: string,
  getMoviesFn: (pageParam: unknown) => Promise<Movies>
) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<Movies>({
      queryKey: [moviesKey],
      initialPageParam: 1,
      queryFn: ({ pageParam }) => getMoviesFn(pageParam),
      getNextPageParam: (lastPage) => lastPage.page + 1,
    });
  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useMoviesQuery;
