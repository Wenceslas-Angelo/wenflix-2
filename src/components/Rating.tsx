import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import { ratingStar } from '../utils/ratingStar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type RatingProps = {
  ratingType: 'circle' | 'star';
  voteAverage?: number;
};

const Rating = ({ ratingType, voteAverage }: RatingProps) => {
  return (
    <>
      {ratingType === 'star' ? (
        <div className="flex justify-center items-center text-2xl">
          {voteAverage
            ? ratingStar(voteAverage).map((star, index) =>
                star === 'full' ? (
                  <span key={index} className="text-[#ffd700] mx-2">
                    <FaStar />
                  </span>
                ) : star === 'half' ? (
                  <span key={index} className="text-[#ffd700] mx-2">
                    <FaStarHalfAlt />
                  </span>
                ) : (
                  <span key={index} className="text-[#ffd700] mx-2">
                    <AiOutlineStar />
                  </span>
                )
              )
            : null}
        </div>
      ) : voteAverage ? (
        <div className="rounded-full font-semibold text-green">
          <CircularProgressbar
            value={voteAverage}
            maxValue={10}
            text={`${voteAverage}`}
            styles={buildStyles({
              pathColor:
                voteAverage < 5 ? 'red' : voteAverage < 7 ? 'orange' : 'green',
            })}
            className="w-20 h-20"
          />
        </div>
      ) : null}
    </>
  );
};

export default Rating;
