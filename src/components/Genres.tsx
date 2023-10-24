import React from 'react';

import useGenresQuery from '../hooks/useGenresQuery';

import Spinner from './Spinner';

const Genres = () => {
  const genres = useGenresQuery();

  return (
    <select className="text-xl px-3 py-2 font-semibold rounded-lg outline-none">
      <option value="empty">genres</option>
      {genres.data ? (
        genres.data.genres.map((genre) => (
          <option value={genre.name} key={genre.id}>
            {genre.name}
          </option>
        ))
      ) : (
        <Spinner />
      )}
    </select>
  );
};

export default Genres;
