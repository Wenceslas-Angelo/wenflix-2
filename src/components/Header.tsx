import React from 'react';
import { FaBarsStaggered, FaSun } from 'react-icons/fa6';
import { GiMoon } from 'react-icons/gi';
import { useSideBarStore } from '../stores/useSideBarStore';
import { BiLogIn } from 'react-icons/bi';
import Form from './Search/Form';
import { useThemeStore } from '../stores/useThemeStore';
import { Link } from 'react-router-dom';

const Header = () => {
  const { toggle } = useSideBarStore();
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <header className="bg-customBlue dark:bg-customBlue/80 w-full py-2 px-3  flex justify-between items-center text-xl">
      <div className="cursor-pointer" onClick={() => toggleTheme()}>
        {isDark ? (
          <FaSun color="#FFFF00" fontSize={30} />
        ) : (
          <GiMoon color="#eefffd" fontSize={30} />
        )}
      </div>
      <div className="w-[50%] hidden sm:flex">
        <Form />
      </div>

      <div className="md:hidden" onClick={() => toggle()}>
        <FaBarsStaggered color="#ffffff" fontSize={30} />
      </div>

      <Link to="/login" className="items-center hidden md:flex cursor-pointer">
        <p className="mr-2 text-light font-semibold">Login</p>
        <BiLogIn fontSize={30} color="#ffffff" />
      </Link>
    </header>
  );
};

export default Header;
