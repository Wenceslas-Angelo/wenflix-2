import React from 'react';
import useSearchQuery from '../hooks/useSearchMovies';
import Spinner from '../components/Spinner';
import { useSearchStore } from '../stores/useSearchStore';
import Movies from '../components/Movies';

const Results = () => {
  const { searchTerm } = useSearchStore();
  const results = useSearchQuery(searchTerm);
  if (!results.data || results.isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Movies header="Popular Movies" movies={results.data.results} />
    </>
  );
};

export default Results;
