import { useState } from 'react';
import './App.css';
import {Movie} from'./Movie';

export function MovieList({movieList,setMovieList}){
  const [deletedMovies,setDeletedMovies] = useState([]);
  return (
    <div className="App">
      <div className="movie-list">
        {movieList.map((movie,index) => (
          <Movie key={index} movie={movie} id={index} movieList={movieList}
          deletedMovies={deletedMovies} setDeletedMovies={setDeletedMovies}/>
        ))}
      </div>
    </div>
  );
}