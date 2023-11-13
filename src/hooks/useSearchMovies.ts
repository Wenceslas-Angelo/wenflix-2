import { useQuery } from '@tanstack/react-query';

import API from '../api';
import { Movies } from '../types';

const useSearchQuery = (query: string) => {
  console.log(`Search movies ${query}`);
  const { data, error, isLoading } = useQuery<Movies>({
    queryKey: ['search'],
    queryFn: () => API.getSearchMovies(query),
  });
  return { data, error, isLoading };
};

export default useSearchQuery;
