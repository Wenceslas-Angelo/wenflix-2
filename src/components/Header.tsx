import React from 'react';
import { FaBarsStaggered, FaSun } from 'react-icons/fa6';
import { useSideBarStore } from '../stores/useSideBarStore';
import { BiLogIn } from 'react-icons/bi';
import Form from './Search/Form';

const Header = () => {
  const { toggle } = useSideBarStore();

  return (
    <header className="bg-customBlue w-full py-2 px-3  flex justify-between items-center text-xl">
      <div className="cursor-pointer">
        <FaSun color="#FFFF00" fontSize={30} />
      </div>
      <div className="w-[50%] hidden sm:flex">
        <Form />
      </div>

      <div className="md:hidden" onClick={() => toggle()}>
        <FaBarsStaggered color="#ffffff" fontSize={30} />
      </div>

      <div className="items-center hidden md:flex cursor-pointer">
        <p className="mr-2 text-light font-semibold">Login</p>
        <BiLogIn fontSize={30} color="#ffffff" />
      </div>
    </header>
  );
};

export default Header;
