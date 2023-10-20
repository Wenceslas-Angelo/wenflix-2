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
import Search from './components/Search';

const App = () => {
  return (
    <>
      <div className="flex">
        <SideBar />

        <div className="md:ml-[25%] lg:ml-[20%] xl:ml-[15%] w-full">
          <Header />
          <div className="sm:hidden bg-secondary py-5 px-2">
            <Search />
          </div>
          <div className="w-full p-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/popular" element={<Popular />} />
              <Route path="/category/upcoming" element={<Upcoming />} />
              <Route path="/category/top_rated" element={<TopRated />} />
              <Route path="/movie/:movieId" element={<Movie />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
