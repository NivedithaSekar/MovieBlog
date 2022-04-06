import {useState} from 'react';
import './AddMovie.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { API_URL } from './global';

export function AddMovie({movieList,setMovieList}){
    //const pathName = useLocation().pathname;
    //const {id} = useParams();
    const navigate=useNavigate();
    const [movie,setMovie] = useState({
      id:null,
      name:"",
      poster :"",
      rating :"",
      summary :"",
      trailer:"https://www.youtube.com/embed/{Trailer_ID_Here}"
    });
    // useEffect(()=>{
    //   if(id != undefined){
    //     fetch(`${API_URL}/${id}`,{method:"GET"})
    //     .then(response => response.json()).then(data => {
    //       setMovie(data);   
    //   });
    //   }
    // },[]);
    let movieId,movieName,moviePoster,movieSummary,movieRating,movieTrailer;
    // console.log(movie);
    movieId = movie.id;
    movieName=movie.name;
    moviePoster = movie.poster;
    movieRating = movie.rating;
    movieSummary = movie.summary;
    movieTrailer=movie.trailer;
    const [id,setId] = useState(movieId);
    const [name, setName] = useState(movieName);
    const [poster, setPoster] = useState(moviePoster);
    const [rating, setRating] = useState(movieRating);
    const [summary, setSummary] = useState(movieSummary);
    const [trailer, setTrailer] = useState(movieTrailer);
    return(
        <div className="add-movie-form">
            <TextField
              id="outlined-text-input-name"
              label="Id"
              type="number"
              size="small"
              value={id}
              onChange={(event) => setId(event.target.value)}
            />
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
                const newMovie = {
                  id:id,
                  name: name,
                  poster: poster,
                  rating: rating,
                  summary: summary,
                  trailer: trailer
                };
                //console.log(JSON.stringify(newMovie));
                fetch(`${API_URL}`,{method:"POST",body: JSON.stringify(newMovie), headers:{'Content-Type':"application/json"} })
                .then(response =>{response.json()}).then((data)=>{navigate('/Movies')})
                //setMovieList([...movieList, newMovie]);
              }}
              variant="contained"
            >
              Add Movie
            </Button>
        </div>
    );
}
