import React from 'react';
import { MdOutlineUpcoming, MdOutlineMovieFilter } from 'react-icons/md';
import { BsStar } from 'react-icons/bs';

export const Links = [
  {
    name: 'popular',
    path: '/category/popular',
    icon: <MdOutlineMovieFilter />,
  },
  {
    name: 'upcoming',
    path: '/category/upcoming',
    icon: <MdOutlineUpcoming />,
  },
  {
    name: 'top rated',
    path: '/category/top_rated',
    icon: <BsStar />,
  },
];
