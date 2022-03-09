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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
      <Card sx={{ maxWidth: 345 }} className="movie-container">
      <CardMedia
        component="img"
        alt={movie.name}
        image={movie.poster}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {movie.name}
        <IconButton aria-label="Summary" onClick={() => setShow(!show)} className="bt-sz-lg" color="primary">
                  {show? <ExpandLessIcon/>: <ExpandMoreIcon/>}
        </IconButton>
        <InfoIcon onClick={() => navigate(`/movies/${id}`)}/>
        <p className="movie-rating"> ⭐{movie.rating}</p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {show? <p className="movie-summary">{movie.summary}</p>:""}
        </Typography>
      </CardContent>
      <CardActions className="movie-user-interactive-container">
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
      </CardActions>
    </Card>
        
    );
}

function deleteMovie(movieList,id,deletedMovies,setDeletedMovies) {
  setDeletedMovies([...deletedMovies,movieList.splice(id,1)]);
 }


 