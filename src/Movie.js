import "./Movie.css";
import { useState } from "react";
import {Like,Dislike} from './Counter'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import { Navigate, useNavigate } from "react-router-dom";

export function Movie({movie,id,movieList,deletedMovies,setDeletedMovies}){
    const navigate = useNavigate();
    const [show, setShow] = useState(true);
    /*const blockStyle = {
        display: show ? "block" : "none",
        marginTop: "10px"
        to be used in p tag - style={blockStyle}
        //conditional styling
    };*/
    return(
        <div className="movie-container">
          <img src={movie.poster} alt={movie.name} className="movie-poster" />
          <div className="movie-specs">
            <h2 className="movie-name">
                {movie.name}
                <IconButton aria-label="Summary" onClick={() => setShow(!show)} className="bt-sz-lg" color="primary">
                  {show? <ExpandLessIcon/>: <ExpandMoreIcon/>}
                </IconButton>
                <InfoIcon onClick={() => navigate(`/movies/${id}`)}/>
            </h2>
            <p className="movie-rating"> ⭐{movie.rating}</p>
          </div>
          {/*<button onClick={() => setShow(!show)}>Summary 🔽</button>*}
          {/**Conditional Rendering */}
          {show? <p className="movie-summary">{movie.summary}</p>:""}
          <div className="movie-user-interactive-container">
            <div className="likes-dislikes-container">
              <Like/><Dislike/>
            </div>
            <div>
              <IconButton aria-label="delete movie" color="error" onClick={() => {
                deleteMovie(movieList,id,deletedMovies,setDeletedMovies);
              }}>
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="edit movie" color="primary" onClick={() => {
                navigate(`/Edit/${id}`);
              }}>
                <EditIcon />
              </IconButton>
            </div>
          </div>
        </div>
    );
}

function deleteMovie(movieList,id,deletedMovies,setDeletedMovies) {
  setDeletedMovies([...deletedMovies,movieList.splice(id,1)]);
 }