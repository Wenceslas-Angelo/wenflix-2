import React from 'react';
import { useParams } from 'react-router-dom';

import useMovieQuery from '../hooks/useMovieQuery';

import MovieMainInfo from '../components/Movie/MovieMainInfo';
import SimilarMovies from '../components/Movie/SimilarMovies';
import TopCast from '../components/Movie/TopCast';
import TopCrew from '../components/Movie/TopCrew';

const Movie = () => {
  const { movieId } = useParams();

  console.log(movieId);

  const { movie, isLoading, isError, credit } = useMovieQuery(
    movieId ? movieId : ''
  );

  if (isError) {
    return;
  }

  if (!movie || isLoading) {
    return;
  }

  return (
    <div>
      <>
        <MovieMainInfo
          title={movie.title}
          backdropPath={movie.backdrop_path}
          posterPath={movie.poster_path}
          overview={movie.overview}
          voteAverage={movie.vote_average}
          genres={movie.genres}
          time={movie.runtime}
          budget={movie.budget}
          revenue={movie.revenue}
          homePage={movie.homepage}
          videos={movie.videos.results[0].id}
        />

        {credit ? (
          <div>
            <TopCast casts={credit.cast.filter((cast) => cast.profile_path)} />
            <TopCrew crews={credit.crew.filter((crew) => crew.profile_path)} />
          </div>
        ) : null}

        <SimilarMovies movieId={movie.id} />
      </>
    </div>
  );
};

export default Movie;
