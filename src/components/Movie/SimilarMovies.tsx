import React from 'react';

import useSimilarMoviesQuery from '../../hooks/useSimilarMoviequery';
import Grid from '../Grid';
import Thumbnail from '../Thumbnail';

import { POSTER_SIZE, IMAGE_BASE_URL } from '../../config';
import noImage from '../../assets/no-poster-available.jpg';

type SimilarMoviesProps = {
  movieId: number;
};

const SimilarMovies = ({ movieId }: SimilarMoviesProps) => {
  const similarMovies = useSimilarMoviesQuery(movieId);

  if (!similarMovies.data) return;

  return (
    <div>
      <>
        <Grid header="Similar Movies">
          {similarMovies.data.results.map((movie) => (
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
      </>
    </div>
  );
};

export default SimilarMovies;
