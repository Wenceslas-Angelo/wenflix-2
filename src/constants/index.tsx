import React from 'react';
import { MdOutlineUpcoming, MdOutlineMovieFilter } from 'react-icons/md';
import { BsStar } from 'react-icons/bs';

export const Links = [
  {
    name: 'popular',
    icon: <MdOutlineMovieFilter />,
  },
  {
    name: 'upcoming',
    icon: <MdOutlineUpcoming />,
  },
  {
    name: 'top rated',
    icon: <BsStar />,
  },
];
