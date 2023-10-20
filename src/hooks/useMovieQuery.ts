import { useQuery } from '@tanstack/react-query';
import { Movie, Credits } from '../types';
import API from '../api';

const useMovieQuery = (movieId: string) => {
  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery<Movie>({
    queryKey: ['movieDetails', movieId],
    queryFn: () => API.getDetailsMovie(movieId),
  });

  const { data: credit } = useQuery<Credits>({
    queryKey: ['movieCredits', movieId],
    queryFn: () => API.getCreditsMovie(movieId),
  });
  return {
    movie,
    isLoading,
    isError,
    credit,
  };
};

export default useMovieQuery;
