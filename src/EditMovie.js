import {useEffect, useState} from 'react';
import './AddMovie.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { API_URL } from './global';


export function EditMovie(){
    const {id} = useParams();
    const [movie,setMovie] = useState(null);
    useEffect(()=>{
        fetch(`${API_URL}/${id}`,{method:"GET"})
        .then(response => response.json()).then(movie => {
          setMovie(movie);   
      });
    },[]);
    return (
        movie ? <EditMovieForm movie={movie} id={id}/>:"Loading..."
    );
      //console.log(movie);
      
}

function EditMovieForm({movie,id}){
    const navigate=useNavigate();
    const [name, setName] = useState(movie.name);
    const [poster, setPoster] = useState(movie.poster);
    const [rating, setRating] = useState(movie.rating);
    const [summary, setSummary] = useState(movie.summary);
    const [trailer, setTrailer] = useState(movie.trailer);
    return(
        <div className="edit-movie-form">
            {/* <TextField
              id="outlined-text-input-name"
              label="Id"
              type="number"
              size="small"
              value={id}
            /> */}
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
            <Button
            onClick={() => {
              const editedMovie = {
                name: name,
                poster: poster,
                rating: rating,
                summary: summary,
                trailer: trailer
              };
              fetch(`${API_URL}/${id}`,{method:"PUT",body: JSON.stringify(editedMovie), headers:{'Content-Type':"application/json"} })
              .then(response =>{response.json()}).then((data)=>{navigate('/Movies')})
              // movieList[id] = {...editedMovie};
              // setMovieList([...movieList]);
              // navigate('/Movies')
            }}
            variant="contained"
            >
                Save & Update
            </Button>
        </div>
    );
}