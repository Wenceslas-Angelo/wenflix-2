import React from 'react';

import MobileSideBar from './MobileSideBar';
import DesktopSideBar from './DesktopSideBar';

const SideBar = () => {
  return (
    <div>
      <div className="md:hidden">
        <MobileSideBar />
      </div>

      <div className="hidden md:block">
        <DesktopSideBar />
      </div>
    </div>
  );
};

export default SideBar;
