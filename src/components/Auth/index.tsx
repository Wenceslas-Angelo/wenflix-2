import React from 'react';
import { Link } from 'react-router-dom';

import Input from './Input';
import Button from './Button';

type Props = {
  variant: 'register' | 'login' | 'forgot password';
};

const Auth = ({ variant }: Props) => {
  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center text-xl font-bold mt-5">LOGO</div>

      <form className="mb-5">
        {variant === 'register' ? <Input type="text" id="name" /> : null}
        <Input type="email" id="email" />

        <Input type="password" id="password" variant={variant} />

        <Button>{variant === 'register' ? 'Register' : 'Login'}</Button>
      </form>

      <div className="my-10 relative py-2">
        <div className="w-full h-[2px] bg-dark" />
        <div className="bg-white px-10 py-2 absolute  left-[50%] translate-x-[-50%] top-[-50%]">
          <div className="w-5 h-5 border-2 border-dark rounded-full" />
        </div>
      </div>

      <Button>
        {variant === 'register' ? 'Register' : 'Login'} With Google
      </Button>

      <p className="mt-8 text-center">
        {variant === 'register'
          ? 'Already have an account?'
          : 'New to Wenflix?'}

        <Link
          to={`/${variant === 'register' ? 'login' : 'register'}`}
          className="font-semibold"
        >
          {variant === 'register' ? ' Login' : ' Register'}
        </Link>
      </p>
    </div>
  );
};

export default Auth;
