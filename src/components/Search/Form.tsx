import React, { useRef, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useSearchStore } from '../../stores/useSearchStore';

const Form = () => {
  const [query, setQuery] = useState('');
  const { setSearchTerm } = useSearchStore();

  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return undefined;
    }
    const timer = setTimeout(() => {
      if (query.length > 2) setSearchTerm(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, query]);

  return (
    <form className="w-full relative">
      <input
        type="text"
        placeholder="Search for movies"
        className=" outline-none text-lg rounded-2xl px-2 py-1 w-full pl-10"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <span className="absolute text-gray-400 left-2 font-bold text-xl top-[50%] translate-y-[-50%]">
        <FiSearch />
      </span>
    </form>
  );
};

export default Form;
