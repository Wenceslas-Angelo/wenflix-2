import { useInfiniteQuery } from '@tanstack/react-query';

import { getMoviesByGenre } from '../api';
import { Movies } from '../types';

const useGenreMoviesQuery = (genreId: string) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<Movies>({
      queryKey: ['genre', genreId],
      initialPageParam: 1,
      queryFn: ({ pageParam }) => getMoviesByGenre(pageParam, genreId),
      getNextPageParam: (lastPage) => lastPage.page + 1,
    });
  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useGenreMoviesQuery;
