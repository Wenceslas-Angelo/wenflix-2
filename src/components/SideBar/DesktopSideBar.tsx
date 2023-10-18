import React from 'react';
import Nav from './Nav';
import Logo from './Logo';

const DesktopSideBar = () => {
  return (
    <div className="px-5 pt-5 h-screen fixed overflow-auto">
      <Logo />
      <Nav />
    </div>
  );
};

export default DesktopSideBar;
