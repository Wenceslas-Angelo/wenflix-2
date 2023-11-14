const API_URL = 'https://api.themoviedb.org/3/';

const API_KEY = process.env.VITE_APP_API_KEY;

const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

const UPCOMING_BASE_URL = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US`;

const TOP_RATED_BASE_URL = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`;

const DETAILS_MOVIE_BASE_URL = (movieId: string) =>
  `${API_URL}movie/${movieId}?api_key=${API_KEY}&append_to_response=videos&language=en-US`;

const SEARCH_MOVIES_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;

const SIMILAR_MOVIES_BASE_URL = (movieId: string) =>
  `${API_URL}movie/${movieId}/similar?api_key=${API_KEY}&language=en-US`;

const CREDITS_BASE_URL = (movieId: string) =>
  `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

const GENRES_BASE_URL = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
  POPULAR_BASE_URL,
  UPCOMING_BASE_URL,
  TOP_RATED_BASE_URL,
  DETAILS_MOVIE_BASE_URL,
  SEARCH_MOVIES_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  SIMILAR_MOVIES_BASE_URL,
  CREDITS_BASE_URL,
  GENRES_BASE_URL,
};
