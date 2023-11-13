import React from 'react';
import { NavLink } from 'react-router-dom';
import { Links } from '../../constants';
import { useSideBarStore } from '../../stores/useSideBarStore';

const Nav = () => {
  const { toggle } = useSideBarStore();
  return (
    <nav className="flex flex-col h-[80vh] w-full mt-5 overflow-y-hidden overflow-x-hidden nav-side-bar">
      {Links.map((link) => (
        <NavLink
          to={link.path}
          key={link.name}
          className={`capitalize text-xl font-medium p-1 flex items-center
               rounded-md px-2 mb-5`}
          onClick={() => toggle()}
        >
          <span className="mr-5">{link.icon}</span>
          <span>{link.name}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
