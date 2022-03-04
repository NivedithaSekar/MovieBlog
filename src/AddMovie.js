import {useState} from 'react';
import './AddMovie.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export function AddMovie({movieList,setMovieList}){
    const pathName = useLocation().pathname;
    const {id} = useParams();
    const navigate=useNavigate();
    let movieName,moviePoster,movieSummary,movieRating,movieTrailer;
    if(pathName === `/Edit/${id}`){
      const movie = movieList[Number(id)];
      movieName=movie.name;
      moviePoster = movie.poster;
      movieRating = movie.rating;
      movieSummary = movie.summary;
      movieTrailer=movie.trailer;
    }else{
      movieName="";
      moviePoster ="";
      movieRating ="";
      movieSummary ="";
      movieTrailer="https://www.youtube.com/embed/{Trailer_ID_Here}";
    }
    const [name, setName] = useState(movieName);
    const [poster, setPoster] = useState(moviePoster);
    const [rating, setRating] = useState(movieRating);
    const [summary, setSummary] = useState(movieSummary);
    const [trailer, setTrailer] = useState(movieTrailer);
    return(
        <div className="add-movie-form">
            <TextField
              id="outlined-text-input-name"
              label="Name"
              type="text"
              size="small"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              id="outlined-text-input-poster"
              label="Poster"
              type="text"
              size="small"
              value={poster}
              onChange={(event) => setPoster(event.target.value)}
            />
            <TextField
              id="outlined-text-input-rating"
              label="Rating"
              type="text"
              size="small"
              value={rating}
              onChange={(event) => setRating(event.target.value)}
            />
            <TextField
              id="outlined-text-input-summary"
              label="Summary"
              type="text"
              size="small"
              value={summary}
              onChange={(event) => setSummary(event.target.value)}
            />
            <TextField
              id="outlined-text-input-trailer"
              label="Trailer"
              type="text"
              size="small"
              value={trailer}
              onChange={(event) => setTrailer(event.target.value)}
            />
            {
              (pathName === `/Edit/${id}`)?
              <Button
              onClick={() => {
                const editedMovie = {
                  name: name,
                  poster: poster,
                  rating: rating,
                  summary: summary,
                  trailer: trailer
                };
                movieList[id] = {...editedMovie};
                setMovieList([...movieList]);
                navigate('/Movies')
              }}
              variant="contained"
            >
              Save & Update
            </Button>
              :
              <Button
              onClick={() => {
                const newMovie = {
                  name: name,
                  poster: poster,
                  rating: rating,
                  summary: summary,
                  trailer: trailer
                };
                setMovieList([...movieList, newMovie]);
                navigate('/Movies')
              }}
              variant="contained"
            >
              Add Movie
            </Button>
            }
        </div>
    );
}
