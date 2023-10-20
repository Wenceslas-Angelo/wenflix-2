import { useQuery } from '@tanstack/react-query';

import API from '../api';
import { Movies } from '../types';

const useSimilarMovieQuery = (movieId: number) => {
  const { data, error, isPending } = useQuery<Movies>({
    queryKey: ['similarMovie'],
    queryFn: () => API.getSimilarMovies(movieId),
  });
  return { data, error, isPending };
};

export default useSimilarMovieQuery;
