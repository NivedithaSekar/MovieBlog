import "./Movie.css";
import { useState } from "react";
import {Like,Dislike} from './Counter'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import {  useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { API_URL } from "./global";

//export function Movie({movie,id,movieList,setMovieList,deletedMovies,setDeletedMovies,getMovieList}){
export function Movie({movie,id,deletedMovies,setDeletedMovies,getMovieList}){
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
        <Typography gutterBottom variant="h5" component="div"className="movie-specs">
        <div>{movie.name}
        <IconButton aria-label="Summary" onClick={() => setShow(!show)} className="bt-sz-lg" color="primary">
                  {show? <ExpandLessIcon/>: <ExpandMoreIcon/>}
        </IconButton>
        <InfoIcon onClick={() => navigate(`/movies/${id}`)}/>
        </div>
        <div className="movie-rating"> ⭐{movie.rating}</div>
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
                fetch(`${API_URL}/${id}`,{method:"DELETE"})
                .then(response => response.json()).then((del_movie) => {
                  //deleteMovie(del_movie,deletedMovies,setDeletedMovies);
                  getMovieList();
                });
                //deleteMovie(movieList,id,deletedMovies,setDeletedMovies);
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

function deleteMovie(movie,deletedMovies,setDeletedMovies) {
  setDeletedMovies([...deletedMovies,movie]);
 }


 