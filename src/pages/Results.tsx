import React from 'react';
import { useParams } from 'react-router-dom';
import useSearchQuery from '../hooks/useSearchMovies';
import Spinner from '../components/Spinner';
import { useSearchStore } from '../stores/useSearchStore';
import Movies from '../components/Movies';

const Results = () => {
  const params = useParams();
  const { searchTerm } = useSearchStore();
  const results = useSearchQuery(params.query ? params.query : searchTerm);

  if (!results.data || results.isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Movies
        header={`Results Movies for "${searchTerm}"`}
        movies={results.data.results}
        showBanner={false}
      />
    </>
  );
};

export default Results;
