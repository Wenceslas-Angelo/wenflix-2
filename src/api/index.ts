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
  GENRE_MOVIES_BASE_URL,
} from '../config';

const getMovies = async (
  url: string,
  page: number | unknown
): Promise<Movies> => {
  const data = await fetch(`${url}&page=${page}`);
  const dataJson = await data.json();
  return dataJson as Movies;
};

export const getPopularMovies = async (pageParam: unknown): Promise<Movies> =>
  getMovies(POPULAR_BASE_URL, pageParam);

export const getUpcomingMovies = async (): Promise<Movies> =>
  getMovies(UPCOMING_BASE_URL, 1);

export const getTopRatedMovies = async (): Promise<Movies> =>
  getMovies(TOP_RATED_BASE_URL, 1);

export const getDetailsMovie = async (movieId: string): Promise<Movie> => {
  const endpoint = DETAILS_MOVIE_BASE_URL(movieId);
  const data = await fetch(endpoint);
  const dataJson = await data.json();
  return dataJson as Movie;
};

export const getSearchMovies = async (
  pageParam: unknown,
  searchQuery: string
): Promise<Movies> =>
  getMovies(`${SEARCH_MOVIES_BASE_URL}${searchQuery}`, pageParam);

export const getMoviesByGenre = async (
  pageParam: unknown,
  genreId: string
): Promise<Movies> =>
  getMovies(`${GENRE_MOVIES_BASE_URL}${genreId}`, pageParam);

export const getSimilarMovies = async (
  pageParam: unknown,
  movieId: string
): Promise<Movies> => getMovies(SIMILAR_MOVIES_BASE_URL(movieId), pageParam);

export const getCreditsMovie = async (movieId: string): Promise<Credits> => {
  const endpoint = CREDITS_BASE_URL(movieId);
  const data = await fetch(endpoint);
  const dataJson = await data.json();
  return dataJson as Credits;
};

export const getGenres = async (): Promise<Genres> => {
  const endpoint = GENRES_BASE_URL;
  const data = await fetch(endpoint);
  const dataJson = await data.json();
  return dataJson as Genres;
};
