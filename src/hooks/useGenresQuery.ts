import { useQuery } from '@tanstack/react-query';

import { getGenres } from '../api';
import { Genres } from '../types';

const useGenresQuery = () => {
  const { data, error, isLoading } = useQuery<Genres>({
    queryKey: ['genres'],
    queryFn: getGenres,
  });
  return { data, error, isLoading };
};

export default useGenresQuery;
