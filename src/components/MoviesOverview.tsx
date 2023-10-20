import React from 'react';
import { Link } from 'react-router-dom';

// Types
import { Movie } from '../types';

// Components
import Grid from './Grid';
import Thumbnail from './Thumbnail';
import Banner from './Banner';

// Utils
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../config';
import noImage from '../assets/no-poster-available.jpg';

type MoviesOverviewProps = {
  header: string;
  movies: Movie[];
  moreLink: string;
};

const MoviesOverview = ({ header, movies, moreLink }: MoviesOverviewProps) => {
  return (
    <div>
      <Banner
        title={movies[0].title}
        overview={movies[0].overview}
        image={IMAGE_BASE_URL + BACKDROP_SIZE + movies[0].backdrop_path}
        voteAverage={movies[0].vote_average}
        releaseDate={movies[0].release_date}
      />
      <div>
        <h1 className="mt-5 font-bold text-4xl text-center">{header}</h1>
        <Grid>
          {movies.map((movie) => (
            <Thumbnail
              key={movie.id}
              movieId={movie.id}
              voteAverage={movie.vote_average}
              title={movie.title}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : noImage
              }
            />
          ))}
        </Grid>

        <div className="relative mt-5 mb-10">
          <div className="bg-customBlue w-full h-[2px] absolute z-0 left-0 right-0 top-0 bottom-0  m-auto" />
          <div className="flex justify-center items-center">
            <Link
              to={`/category/${moreLink}`}
              className="uppercase z-10 relative font-semibold text-xl bg-customBlue text-white border border-green py-2 px-5"
            >
              VIEW MORE {header}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesOverview;
