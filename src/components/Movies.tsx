import React from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';

// Types
import { Movies as MoviesType } from '../types';

// Components
import Grid from './Grid';
import Thumbnail from './Thumbnail';
import Banner from './Banner';

// Utils
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../config';
import noImage from '../assets/no-poster-available.jpg';
import Spinner from './Spinner';

type Props = {
  header: string;
  movies: {
    data: InfiniteData<MoviesType, unknown> | undefined;
    fetchNextPage: (
      options?: FetchNextPageOptions | undefined
    ) => Promise<
      InfiniteQueryObserverResult<InfiniteData<MoviesType, unknown>, Error>
    >;
    hasNextPage: boolean;
    isFetchingNextPage: boolean;
  };
  moreLink?: string;
  showBanner?: boolean;
  isInfiniteScroll?: boolean;
};

const Movies = ({
  header,
  movies,
  moreLink,
  showBanner = true,
  isInfiniteScroll = true,
}: Props) => {
  if (!movies.data) return;
  const movieData0 = movies.data.pages[0].results[0];

  return (
    <div>
      {showBanner ? (
        <Banner
          title={movieData0.title}
          overview={movieData0.overview}
          image={IMAGE_BASE_URL + BACKDROP_SIZE + movieData0.backdrop_path}
          voteAverage={movieData0.vote_average}
          releaseDate={movieData0.release_date}
        />
      ) : null}
      <div>
        <div className="mt-5 flex justify-between items-center mx-5">
          <h1 className="font-bold text-4xl">{header}</h1>
        </div>

        {isInfiniteScroll ? (
          <InfiniteScroll
            dataLength={movies.data?.pages.length || 0}
            next={() => movies.fetchNextPage()}
            hasMore={!!movies.hasNextPage}
            loader={<Spinner />}
          >
            {movies.data.pages.map((page, index) => (
              <Grid key={index}>
                {page.results.map((movie) => (
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
            ))}
          </InfiniteScroll>
        ) : (
          <Grid>
            {movies.data.pages[0].results.slice(0, 10).map((movie) => (
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
        )}

        {moreLink ? (
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
        ) : null}
      </div>
    </div>
  );
};

export default Movies;
