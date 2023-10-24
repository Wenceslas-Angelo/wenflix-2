import { useQuery } from '@tanstack/react-query';

import API from '../api';
import { Genres } from '../types';

const useGenresQuery = () => {
  const { data, error, isLoading } = useQuery<Genres>({
    queryKey: ['genres'],
    queryFn: API.getGenres,
  });
  return { data, error, isLoading };
};

export default useGenresQuery;
