import React from 'react';
import { BiHomeAlt2 } from 'react-icons/bi';
import { MdOutlineUpcoming, MdOutlineMovieFilter } from 'react-icons/md';
import { BsStar } from 'react-icons/bs';

export const Links = [
  {
    name: 'home',
    path: '/',
    icon: <BiHomeAlt2 />,
  },
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
