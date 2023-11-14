import { getUpcomingMovies } from '../api';
import useMoviesQuery from './useMoviesQuery';

const useUpcomingQuery = () => useMoviesQuery('upcoming', getUpcomingMovies);

export default useUpcomingQuery;
