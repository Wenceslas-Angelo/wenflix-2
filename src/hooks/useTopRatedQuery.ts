import { getTopRatedMovies } from '../api';
import useMoviesQuery from './useMoviesQuery';

const useTopRatedQuery = () => useMoviesQuery('topRated', getTopRatedMovies);

export default useTopRatedQuery;
