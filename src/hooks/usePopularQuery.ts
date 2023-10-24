import { useQuery } from '@tanstack/react-query';

import API from '../api';
import { Movies } from '../types';

const usePopularQuery = () => {
  const { data, error, isLoading } = useQuery<Movies>({
    queryKey: ['popular'],
    queryFn: API.getPopularMovies,
  });
  return { data, error, isLoading };
};

export default usePopularQuery;
