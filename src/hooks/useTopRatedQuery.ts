import { useQuery } from '@tanstack/react-query';

import API from '../api';
import { Movies } from '../types';

const useTopRatedQuery = () => {
  const { data, error, isPending } = useQuery<Movies>({
    queryKey: ['topRated'],
    queryFn: API.getTopRatedMovies,
  });
  return { data, error, isPending };
};

export default useTopRatedQuery;
