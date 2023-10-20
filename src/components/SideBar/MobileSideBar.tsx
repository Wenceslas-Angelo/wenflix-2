import React from 'react';
import { BiLogIn } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSideBarStore } from '../../stores/useSideBarStore';
import Nav from './Nav';
import Logo from './Logo';

const MobileSideBar = () => {
  const { isOpen, toggle } = useSideBarStore();
  return (
    <div
      className={`fixed z-50 h-screen w-full bg-dark/50 top-0 ${
        isOpen ? 'right-0' : 'right-[-100vw]'
      } transition-all overflow-hidden`}
    >
      <div className="bg-gray-200 flex justify-between p-5 rounded-xl absolute right-1 w-[95%] sm:w-[50%] h-[95vh] top-[50%] translate-y-[-50%]">
        <div>
          <Logo />
          <Nav />
        </div>

        <div className="text-3xl text-[#f631a7] flex flex-col items-center py-1 cursor-pointer">
          <div onClick={() => toggle()}>
            <FaTimes />
          </div>
          <div className="bg-dark text-white rounded-md p-2 my-5">
            <Link to="/login" className="flex flex-col items-center">
              <BiLogIn />
              <p className="text-lg">Log in</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSideBar;
