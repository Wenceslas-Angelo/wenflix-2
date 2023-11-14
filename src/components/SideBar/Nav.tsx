import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiHomeAlt2 } from 'react-icons/bi';

import { Links } from '../../constants';
import genreIcons from '../../assets/genres';
import { useSideBarStore } from '../../stores/useSideBarStore';
import useGenresQuery from '../../hooks/useGenresQuery';

const Nav = () => {
  const { toggle } = useSideBarStore();
  const genres = useGenresQuery();

  console.log(genres);

  return (
    <nav className="flex flex-col w-full mt-5 nav-side-bar overflow-auto">
      <NavLink
        to="/"
        className={`capitalize text-xl font-medium p-1 flex items-center
               rounded-md px-2 mb-5`}
        onClick={() => toggle()}
      >
        <span className="mr-2">
          <BiHomeAlt2 />
        </span>
        <span>Home</span>
      </NavLink>

      <h2 className="mt-5 mb-2 text-2xl font-bold">Categories</h2>
      {Links.map((link) => (
        <NavLink
          to={`/category/${link.name}`}
          key={link.name}
          className={`capitalize text-xl font-medium p-1 flex items-center
               rounded-md px-2 mb-5`}
          onClick={() => toggle()}
        >
          <span className="mr-2">{link.icon}</span>
          <span>{link.name}</span>
        </NavLink>
      ))}

      <h2 className="mt-5 mb-2 text-2xl font-bold">Genres</h2>

      {genres.data?.genres.map((genre) => (
        <NavLink
          to={`genre/${genre.name}/${genre.id}`}
          key={genre.id}
          className={`capitalize text-lg font-medium p-1 flex items-center
               rounded-md px-2 mb-5`}
          onClick={() => toggle()}
        >
          <img
            src={genreIcons[genre.name.toLowerCase()]}
            className="w-7 mr-2"
          />
          <span>{genre.name}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
