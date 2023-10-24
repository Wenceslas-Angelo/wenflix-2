import { Movies, Movie, Credits, Genres } from '../types';
import {
  POPULAR_BASE_URL,
  UPCOMING_BASE_URL,
  TOP_RATED_BASE_URL,
  DETAILS_MOVIE_BASE_URL,
  SEARCH_MOVIES_BASE_URL,
  SIMILAR_MOVIES_BASE_URL,
  CREDITS_BASE_URL,
  GENRES_BASE_URL,
} from '../config';

const getMovies = async (url: string, page: number): Promise<Movies> => {
  const data = await fetch(`${url}&page=${page}`);
  const dataJson = await data.json();
  return dataJson as Movies;
};

const apiSettings = {
  getPopularMovies: async (): Promise<Movies> => getMovies(POPULAR_BASE_URL, 1),

  getUpcomingMovies: async (): Promise<Movies> =>
    getMovies(UPCOMING_BASE_URL, 1),

  getTopRatedMovies: async (): Promise<Movies> =>
    getMovies(TOP_RATED_BASE_URL, 1),

  getDetailsMovie: async (movieId: string): Promise<Movie> => {
    const endpoint = DETAILS_MOVIE_BASE_URL(movieId);
    const data = await fetch(endpoint);
    const dataJson = await data.json();
    return dataJson as Movie;
  },

  getSearchMovies: async (
    searchQuery: string,
    { pageParam = 1 }: { pageParam?: number }
  ): Promise<Movies> =>
    getMovies(`${SEARCH_MOVIES_BASE_URL}${searchQuery}`, pageParam),

  getSimilarMovies: async (movieId: string): Promise<Movies> =>
    getMovies(SIMILAR_MOVIES_BASE_URL(movieId), 1),

  getCreditsMovie: async (movieId: string): Promise<Credits> => {
    const endpoint = CREDITS_BASE_URL(movieId);
    const data = await fetch(endpoint);
    const dataJson = await data.json();
    return dataJson as Credits;
  },

  getGenres: async (): Promise<Genres> => {
    const endpoint = GENRES_BASE_URL;
    const data = await fetch(endpoint);
    const dataJson = await data.json();
    return dataJson as Genres;
  },
};

export default apiSettings;
