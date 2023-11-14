import React from 'react';
import Nav from './Nav';
import Logo from './Logo';

const DesktopSideBar = () => {
  return (
    <div className="px-5 pt-5 min-h-screen sticky overflow-auto custom-scrollbar">
      <Logo />
      <Nav />
    </div>
  );
};

export default DesktopSideBar;
