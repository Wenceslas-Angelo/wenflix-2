import React from 'react';
import Banner from '@/components/Banner';
import Grid from '@/components/Grid';
import Thumbnail from '@/components/Thumbnail';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '@/utils/config';
import noImage from '@/assets/no-poster.png';
import { Movie } from '@/types';

type CategorieProps = {
  movies: Movie[];
  category: string;
};

const Category = ({ movies, category }: CategorieProps) => {
  return (
    <div>
      <Banner
        title={movies[0].title}
        overview={movies[0].overview}
        image={IMAGE_BASE_URL + BACKDROP_SIZE + movies[0].backdrop_path}
        voteAverage={movies[0].vote_average}
        releaseDate={movies[0].release_date}
      />

      <Grid header={`${category} Movies`}>
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
    </div>
  );
};

export default Category;
