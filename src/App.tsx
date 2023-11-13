import React from 'react';
import { Route, Routes } from 'react-router-dom';

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
import Results from './pages/Results';

const App = () => {
  return (
    <>
      <div className="flex">
        <SideBar />

        <div className="md:ml-[25%] lg:ml-[20%] xl:ml-[15%] w-full">
          <Header />
          <div className="sm:hidden bg-light py-5 px-2">
            <Form />
          </div>

          <div className="w-full p-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/popular" element={<Popular />} />
              <Route path="/category/upcoming" element={<Upcoming />} />
              <Route path="/category/top_rated" element={<TopRated />} />
              <Route path="/movie/:movieId" element={<Movie />} />
              <Route path="/results/:query" element={<Results />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
