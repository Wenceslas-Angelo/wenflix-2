import React from 'react';
import { Link } from 'react-router-dom';
import { truncateText } from '../utils/truncateText';
import Rating from './Rating';

type ThumbnailProps = {
  image: string;
  movieId?: number;
  clickable: boolean;
  voteAverage?: number;
  title?: string;
};

const Thumbnail = ({
  image,
  movieId,
  clickable,
  voteAverage,
  title,
}: ThumbnailProps) => {
  return (
    <div className="thumbnail">
      {clickable && title ? (
        <Link to={`/movie/${movieId}`}>
          <img
            src={image}
            alt="movie-thumb"
            loading="lazy"
            width={200}
            height={200}
            className="w-full max-w-2xl object-cover rounded-3xl"
          />
          <h3 className="text-center text-lg">{truncateText(title, 20)}</h3>
          <Rating ratingType="star" voteAverage={voteAverage} />
        </Link>
      ) : (
        <img
          src={image}
          alt="movie-thumb"
          loading="lazy"
          width={500}
          height={300}
          className="w-full h-[90vh] max-w-2xl object-cover rounded-3xl p-5"
        />
      )}
    </div>
  );
};

export default Thumbnail;
