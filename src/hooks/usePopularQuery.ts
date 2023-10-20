import { useQuery } from '@tanstack/react-query';

import API from '../api';
import { Movies } from '../types';

const usePopularQuery = () => {
  const { data, error, isPending } = useQuery<Movies>({
    queryKey: ['popular'],
    queryFn: API.getPopularMovies,
  });
  return { data, error, isPending };
};

export default usePopularQuery;
