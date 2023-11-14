import { useInfiniteQuery } from '@tanstack/react-query';

import { getSearchMovies } from '../api';
import { Movies } from '../types';

const useSearchQuery = (query: string) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<Movies>({
      queryKey: ['search'],
      initialPageParam: 1,
      queryFn: ({ pageParam }) => getSearchMovies(pageParam, query),
      getNextPageParam: (lastPage) => lastPage.page + 1,
    });
  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useSearchQuery;
