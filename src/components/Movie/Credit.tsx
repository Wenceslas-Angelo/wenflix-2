import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

type CreditsProps = {
  profile_path: string;
  name: string;
  character: string;
};

const Credit = ({ profile_path, name, character }: CreditsProps) => {
  return (
    <div className="text-[#fff] bg-[#333] rounded-2xl p-1 text-center">
      <img
        src={IMAGE_BASE_URL + POSTER_SIZE + profile_path}
        width={200}
        height={200}
        alt="top_cast_profil"
        className="block w-full h-32 object-cover rounded-2xl"
      />
      <h2 className="mt-2">{name}</h2>
      <p className="my-1">{character}</p>
    </div>
  );
};

export default Credit;
