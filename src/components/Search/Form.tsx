import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { useSearchStore } from '../../stores/useSearchStore';

const Form = () => {
  const { searchTerm, setSearchTerm } = useSearchStore();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/results/${searchTerm}`);
  };

  return (
    <form className="w-full relative" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Search for movies"
        className=" outline-none text-lg rounded-2xl px-2 py-1 w-full pl-10 dark:bg-dark"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <span className="absolute text-gray-400 left-2 font-bold text-xl top-[50%] translate-y-[-50%]">
        <FiSearch />
      </span>
    </form>
  );
};

export default Form;
