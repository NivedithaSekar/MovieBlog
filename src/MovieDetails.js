import { useParams, useNavigate} from 'react-router-dom'
import { useState, useEffect} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import './MovieDetails.css'
import {API_URL} from './global'

export function MovieDetails(){
    const {id} = useParams();
    const navigate=useNavigate();
    const [movie,setMovie] = useState({});
    useEffect(()=>{
      fetch(`${API_URL}/${id}`,{method:"GET"})
    .then(response => response.json()).then(data => setMovie(data));
    },[])   
    //return (isNaN(Number(id)))? navigate('/404'):
    return <div className="movie-details">
      <iframe className="movie-trailer" width="75%" height="450" src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <div className="movie-info">
        <div className="movie-specs-details">
          <h2>{movie.name} </h2>
          <p className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p className="movie-summary-details">{movie.summary}</p>
        <Button variant="contained" startIcon={<ArrowBackIcon/>} onClick={()=>navigate(-1)}>
            Back
        </Button>
      </div>
    </div>
  }