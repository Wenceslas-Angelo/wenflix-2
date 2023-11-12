import React from 'react';
import { FaArrowLeft, FaHeart } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { SiThemoviedatabase } from 'react-icons/si';
import { BiSolidMoviePlay } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useShowTrailerStore } from '../../stores/useShowTraillerStore';

type ExternalLinkProps = {
  homePage: string;
  videoId: string;
};

const ExternalLink = ({ homePage }: ExternalLinkProps) => {
  const { trailerVisible } = useShowTrailerStore();
  return (
    <div className="font-bold text-lg lg:text-2xl text-dark flex flex-wrap items-center mt-10">
      <Link
        to={homePage}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-5 py-2 border border-dark"
      >
        <p className="mr-2">WEBSITE</p> <TbWorldWww />
      </Link>
      <Link to="/" className="flex items-center px-5 py-2 border border-dark">
        <p className="mr-2">TMDB</p> <SiThemoviedatabase />
      </Link>
      <span
        className="flex items-center px-5 py-2 border border-dark cursor-pointer"
        onClick={() => trailerVisible()}
      >
        <p className="mr-2">TRAILER</p> <BiSolidMoviePlay />
      </span>
      <Link to="/" className="flex items-center px-5 py-2 border border-dark">
        <p className="mr-2">FAVORITE</p> <FaHeart />
      </Link>
      <Link to="/" className="flex items-center px-5 py-2 border border-dark">
        <p className="mr-2">BACK</p> <FaArrowLeft />
      </Link>
    </div>
  );
};

export default ExternalLink;
