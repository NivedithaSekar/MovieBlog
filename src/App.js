import './App.css';
import {AddMovie} from'./AddMovie';
import {MovieList} from'./MovieList';
import {useState} from 'react';
import {NavLink, Routes, Route, Navigate} from 'react-router-dom'
import {MovieDetails} from './MovieDetails';


function App() {
  //lifing up the state of the movie list as it is used by both App page and AddMovie page
  const INITIAL_MOVIE_LIST = require('./movie_list.json').movies;
  const [movieList,setMovieList] = useState(INITIAL_MOVIE_LIST);
  return <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <NavLink to="/" className="navbar-brand nav-link text-white">Home</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/Movies" className="nav-link text-white">List of Movies</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/AddMovie" className="nav-link text-white">Add movie</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Movies" element={<MovieList movieList={movieList} setMovieList={setMovieList} />}></Route>
          <Route path="/AddMovie" element={<AddMovie movieList={movieList} setMovieList={setMovieList}/>}></Route>
          <Route path="/Edit/:id" element={<AddMovie movieList={movieList} setMovieList={setMovieList}/>}></Route>
          <Route path="/Movies/:id" element={<MovieDetails movieList={movieList}/>}></Route>
          <Route path="/404" element={<PageNotFound/>}></Route>
          <Route path="*" element={<Navigate replace to="/404"/>}></Route>
       </Routes>
  </div>
}

function Home(){
  return <div>
    <h1>Welcome to my Favourite Movie list! </h1>
    <p>Here I have listed my favorite movies..And the site is still in progress!</p>
    <p>For now, We can perform CRUD Operations(Create, Read, Update & Delete) here</p>
    <p>Hope you'll like it😀</p>
  </div>
}

function PageNotFound(){
  return <div className="error-page">
    <img src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif" alt="page not found" />
  </div>
}

export default App;
