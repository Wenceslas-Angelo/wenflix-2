import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Hooks
import { useSearchStore } from './stores/useSearchStore';
import useSearchQuery from './hooks/useSearchMovies';

// Page
import Home from './pages/Home';
import Popular from './pages/Popular';
import Upcoming from './pages/Upcoming';
import TopRated from './pages/TopRated';
import Movie from './pages/Movie';
import NotFound from './pages/NotFound';

// Components
import Header from './components/Header';
import SideBar from './components/SideBar';
import Form from './components/Search/Form';
import ModalResult from './components/Search/ModalResult';
import Results from './pages/Results';
import { useModalSearchStore } from './stores/useModalSearchStore';
import Spinner from './components/Spinner';

const App = () => {
  const { searchTerm } = useSearchStore();
  const results = useSearchQuery(searchTerm);
  const { isOpen } = useModalSearchStore();

  return (
    <>
      <div className="flex">
        <SideBar />

        <div className="md:ml-[25%] lg:ml-[20%] xl:ml-[15%] w-full">
          <Header />
          <div className="sm:hidden bg-light py-5 px-2">
            <Form />
          </div>

          {results.data?.results ? (
            <div
              className={`${
                isOpen ? 'block' : 'hidden'
              } absolute z-50 flex py-1 px-2 w-full md:w-[75%] lg:w-[80%] xl:w-[85%]`}
            >
              <ModalResult movies={results.data} />
            </div>
          ) : (
            <Spinner />
          )}

          <div className="w-full p-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/popular" element={<Popular />} />
              <Route path="/category/upcoming" element={<Upcoming />} />
              <Route path="/category/top_rated" element={<TopRated />} />
              <Route path="/movie/:movieId" element={<Movie />} />
              <Route path="/results" element={<Results />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
