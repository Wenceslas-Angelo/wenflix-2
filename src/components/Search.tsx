import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Search = () => {
  return (
    <form className="w-full relative">
      <input
        type="text"
        placeholder="Search for movies"
        className=" outline-none text-lg rounded-2xl px-2 py-1 w-full pl-10 bg-dark"
      />
      <span className="absolute text-gray-400  left-2 font-bold text-xl top-[50%] translate-y-[-50%]">
        <FiSearch />
      </span>
    </form>
  );
};

export default Search;
