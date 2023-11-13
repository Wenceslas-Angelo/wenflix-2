import React from 'react';

import useGenresQuery from '../hooks/useGenresQuery';

const Genres = () => {
  const genres = useGenresQuery();

  if (!genres.data) {
    return;
  }

  return (
    <select className="text-xl px-3 py-2 font-semibold rounded-lg outline-none">
      <option value="empty">genres</option>
      {genres.data.genres.map((genre) => (
        <option value={genre.name} key={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};

export default Genres;
