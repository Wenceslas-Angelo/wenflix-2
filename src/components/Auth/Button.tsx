import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button className="bg-customBlue text-white font-bold text-lg rounded-md py-1 w-full">
      {children}
    </button>
  );
};

export default Button;
