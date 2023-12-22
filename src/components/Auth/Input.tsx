import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  id: 'name' | 'email' | 'password';
  type: 'text' | 'email' | 'password';
  variant?: 'register' | 'login' | 'forgot password';
};

const Input = ({ id, type, variant }: Props) => {
  return (
    <div className="flex flex-col my-5">
      <label className="capitalize text-lg font-medium">{id}</label>
      <input
        type={type}
        className="text-lg px-2 py-1 border bg-gray-100 outline-none rounded-md"
      />
      {variant === 'login' && type === 'password' ? (
        <Link
          to="forgot-password"
          className="text-right text-md mt-1 font-medium"
        >
          Forgot password?
        </Link>
      ) : null}
    </div>
  );
};

export default Input;
