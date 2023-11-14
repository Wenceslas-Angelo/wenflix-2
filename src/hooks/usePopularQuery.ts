import { getPopularMovies } from '../api';
import useMoviesQuery from './useMoviesQuery';

const usePopularQuery = () => useMoviesQuery('popular', getPopularMovies);

export default usePopularQuery;
