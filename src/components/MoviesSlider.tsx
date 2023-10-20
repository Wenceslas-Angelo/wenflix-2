import { Movie } from '../types';
import React from 'react';
import Thumbnail from './Thumbnail';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import noImage from '@/assets/no-poster.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

type MoviesSliderProps = {
  header: string;
  movies: Movie[];
  allLink: string;
};

const MoviesSlider = ({ header, movies, allLink }: MoviesSliderProps) => {
  return (
    <div className="max-w-6xl mx-auto my-2">
      <div className="flex justify-between items-center py-5">
        <h1 className="text-3xl font-bold ">{header}</h1>
        <Link to={`/${allLink}`} className="text-green font-semibold text-xl">
          View All
        </Link>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id} className="w-10">
            <Thumbnail
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : noImage
              }
              title={movie.title}
              voteAverage={movie.vote_average}
              movieId={movie.id}
              clickable
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MoviesSlider;
