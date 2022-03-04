import { useParams, useNavigate} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import './MovieDetails.css'

export function MovieDetails({movieList}){
    const {id} = useParams();
    const navigate=useNavigate();
    const movie = movieList[id];
    //return (isNaN(Number(id)))? navigate('/404'):
    return <div className="movie-details">
      <iframe className="movie-trailer" width="75%" height="450" src={movieList[id].trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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