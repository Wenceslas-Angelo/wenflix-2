import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';
import Thumbnail from '../Thumbnail';
import noImage from '../../assets/no-poster-available.jpg';
import { Genres } from '../../types';
import MoneyInfo from './MoneyInfo';
import ExternalLink from './ExternalLink';
import MovieInfo from './MovieInfo';

type MovieInfoProps = {
  backdropPath: string;
  posterPath: string;
  title: string;
  overview: string;
  voteAverage: number;
  genres: Genres[];
  time: number;
  budget: number;
  revenue: number;
  homePage: string;
  videos: string;
};

const MovieMainInfo = ({
  backdropPath,
  posterPath,
  title,
  overview,
  voteAverage,
  genres,
  time,
  budget,
  revenue,
  homePage,
  videos,
}: MovieInfoProps) => {
  const bannerStyles = {
    background: ` ${
      backdropPath
        ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdropPath})`
        : '#000'
    }`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div
      style={bannerStyles}
      className="mx-3 mb-3 rounded-lg mt-2 min-h-screen"
    >
      <div className="bg-[rgba(0,0,0,0.8)] rounded-xl flex h-full">
        <div className="hidden lg:block">
          <Thumbnail
            image={
              posterPath
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${posterPath}`
                : noImage
            }
            clickable={false}
          />
        </div>
        <div className="w-full p-5">
          <MovieInfo
            title={title}
            voteAverage={voteAverage}
            genres={genres}
            overview={overview}
          />

          <MoneyInfo time={time} budget={budget} revenue={revenue} />

          <ExternalLink homePage={homePage} videoId={videos} />
        </div>
      </div>
    </div>
  );
};

export default MovieMainInfo;
