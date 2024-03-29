import React from "react";
import './App.css';
import { useState } from "react";
import TrendApi from "./movies/mainpageofmovies/trendApi.jsx";
import FrontPage from "./movies/frontpage/frontPage.jsx";
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import { GetContext } from "./context/getcontext"
import InsideMovies from "./movies/insidethremovie/insideMovies.jsx";
import Movie from "./movies/mainmovie/movies.jsx"
import Shows from "./tvshows/mainShows/shows.jsx"
import TrendShow from "./tvshows/trendShow"

import InsideShow from "./tvshows/insidetv"
import RollMovies from "./movies/filtergeners/rollMovies.jsx"
import FilterGeners from "./movies/filtergeners/filtersgeners.jsx"
import FavMovies from "./movies/insidethremovie/favinside.jsx"

import Search from "./movies/search/search.jsx"
import RollShows from "./tvshows/filtergeners/rollshows.jsx"
import FilterGenersShows from "./tvshows/filtergeners/filtergenersshow.jsx"
import SearchShows from "./tvshows/searchshows.jsx/searchshow.jsx"
import Login from "./registerPage/login.jsx"
import SignUP from "./registerPage/signup.jsx"
import Reset from "./registerPage/resetpassword.jsx"

import Forgot from "./registerPage/forgotpassword.jsx"

import {useTextContexts} from "./hooks/userContext"
function App() {
  const [show, setShow] = useState(false)
  const { user } =useTextContexts()
  return (
    <div>
     
      <Router>
       {/* <NavBar /> */}
      <GetContext>
      
            <Routes>
             
              <Route path="/" element={show ? <TrendShow setShow={setShow} /> : <TrendApi setShow={setShow} />} />
              <Route path="/movie/:id" element={<InsideMovies />} />
              <Route path="/movies" element={<Movie />} />
              <Route path="/forgotpassword" element={<Forgot />} />
              <Route path="/register/resetpassword/:token" element={<Reset />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to={"/"}/>} />
              <Route path="/signup" element={!user ? <SignUP /> : <Navigate to={"/"}/>} />
              <Route path="/movies/gener/:generes" element={<RollMovies />} />
              <Route path="/movies/gener/:generes/movie/:id" element={<InsideMovies />} />
              <Route path="/series/gener/:generes/show/:id" element={<InsideShow />} />
              <Route path="movies/movie/:id" element={<InsideMovies />} />
              <Route path="movies/page/:page/movie/:id" element={<InsideMovies />} />
              <Route path="movies/page/gener/:generes/:page/movie/:id" element={<InsideMovies />} />
              <Route path="movies/:search/movie/:id" element={<InsideMovies />} />
              <Route path="series/page/gener/:gen/:page/show/:id" element={<InsideShow />} />
              <Route path="series/:search/show/:id" element={<InsideShow />} />
              <Route path="movies/:search" element={<Search />} />
              <Route path="/movies/page/gener/:generes/:pages" element={<FilterGeners />} />
              <Route path="/favorite" element={<FavMovies />} />
              <Route path="favorite/movie/:id" element={<InsideMovies />} />
              <Route path="wishlist/movie/:id" element={<InsideMovies />} />
              <Route path="/series" element={<Shows />} />
              <Route path="/series/gener/:gen" element={<RollShows />} />
              <Route path="shows/page/gener/:generes/:page/show/:id" element={<InsideShow />} />
              <Route path="/show/:id" element={<InsideShow />} />
              <Route path="series/show/:id" element={<InsideShow />} />
              <Route path="series/:search" element={<SearchShows />} />
              <Route path="favorite/show/:id" element={<InsideShow />}/>
              <Route path="wishlist/show/:id" element={<InsideShow />}/>
              <Route path="/shows/page/gener/:gen/:pages" element={<FilterGenersShows />} />
            </Routes>
            
            </GetContext>
          
      
      </Router>
    </div>
    
  );
}

export default App;
