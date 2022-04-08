import { useState, useEffect} from 'react';
import './App.css';
import {Movie} from'./Movie';
import {API_URL} from './global'

export function MovieList(){
  const [movieList,setMovieList] = useState([]);
  //const [deletedMovies,setDeletedMovies] = useState([]);

  const getMovieList = () => {
    fetch(`${API_URL}`,{method:"GET"})
    .then(response => response.json()).then(data => {
      setMovieList(data)
      //console.log(deletedMovies)
    });
  };
  useEffect(()=>{getMovieList()},[]);   
  
  
  return (
    <div className="App">
      <div className="movie-list">
        {movieList.map((movie,index) => (
          // <Movie key={index} movie={movie} id={movie.id} movieList={movieList} setMovieList={setMovieList}
          // deletedMovies={deletedMovies} setDeletedMovies={setDeletedMovies} getMovieList={getMovieList}/>
          <Movie key={index} movie={movie} id={movie.id} getMovieList={getMovieList}/>
        ))}
      </div>
    </div>
  );
}