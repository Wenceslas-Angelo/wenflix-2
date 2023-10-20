import { useQuery } from '@tanstack/react-query';

import API from '../api';
import { Movies } from '../types';

const useUpcomingQuery = () => {
  const { data, error, isPending } = useQuery<Movies>({
    queryKey: ['upcoming'],
    queryFn: API.getUpcomingMovies,
  });
  return { data, error, isPending };
};

export default useUpcomingQuery;
