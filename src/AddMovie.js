//import {useState} from 'react';
import './AddMovie.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {  useNavigate } from 'react-router-dom'; //useLocation, useParams
import { API_URL } from './global';
import {useFormik} from 'formik';
import * as yup from 'yup';

const movieValidationSchema = yup.object({
  //id:yup.number().required("Provide unique ID"),
  name:yup.string().required("Provide a Movie Name"),
  poster :yup.string().min(4,"Please provide a valid poster details").required("Please provide the poster details"),
  rating :yup.number().min(0,"Provide a rating in the scale of 0-10").max(10,"Provide a rating in the scale of 0-10").required(),
  summary :yup.string().min(4,"Why not detailed Summary!").required("Please provide the Summary"),
  trailer:yup.string().min(4,"Please provide a valid trailer").required("Please provide the trailer").matches('(?:https?:\/\/)?(?:www\.)?youtube.com\/embed((?=\/[-a-zA-Z0-9_]{9,}(?!\S)))',"Format - https://www.youtube.com/embed/Trailer_ID_Here")
});

//export function AddMovie({movieList,setMovieList}){
export function AddMovie(){
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues:{
      id:undefined,
      name:"",
      poster :"",
      rating :"",
      summary :"",
      trailer:"https://www.youtube.com/embed/Trailer_ID_Here"
    },
    validationSchema: movieValidationSchema,
    onSubmit: (newMovie) => {
      //console.log("On Submit",newMovie);
      createMovie(newMovie);
    }
  });
  const createMovie = (newMovie) => {
    //const newMovie = {
      //id:id,
      //name: name,
      //poster: poster,
      //rating: rating,
      //summary: summary,
      //trailer: trailer
    //};
    //console.log(JSON.stringify(newMovie));
    fetch(`${API_URL}`,{method:"POST",body: JSON.stringify(newMovie), headers:{'Content-Type':"application/json"} })
    .then(response =>{response.json()}).then((data)=>{navigate('/Movies')})
    //setMovieList([...movieList, newMovie]);
  }
    //const pathName = useLocation().pathname;
    //const {id} = useParams();
    //const [movie,setMovie] = useState({
    //  id:null,
    //  name:"",
    //  poster :"",
    //  rating :"",
    //  summary :"",
    //  trailer:"https://www.youtube.com/embed/Trailer_ID_Here"
    //});
    // useEffect(()=>{
    //   if(id != undefined){
    //     fetch(`${API_URL}/${id}`,{method:"GET"})
    //     .then(response => response.json()).then(data => {
    //       setMovie(data);   
    //   });
    //   }
    // },[]);
    //let movieId,movieName,moviePoster,movieSummary,movieRating,movieTrailer;
    // console.log(movie);
    //const [id,setId] = useState(movie.id);
    //const [name, setName] = useState(movie.name);
    //const [poster, setPoster] = useState(movie.poster);
    //const [rating, setRating] = useState(movie.rating);
    //const [summary, setSummary] = useState(movie.summary);
    //const [trailer, setTrailer] = useState(movie.trailer);
    return(
        //<div className="add-movie-form">
        <form className="add-movie-form" onSubmit={formik.handleSubmit}>
            {/* <TextField
              id="outlined-text-input-name"
              label="Id"
              type="number"
              size="small"
              value={formik.values.id}
              name="id"
              //onChange={(event) => setId(event.target.value)}
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              error={formik.touched.id && formik.errors.id}
              helperText = {formik.touched.id && formik.errors.id? formik.errors.id:""}
            /> */}
            {/* {formik.touched.id && formik.errors.id? formik.errors.id:""} */}
            <TextField
              id="outlined-text-input-name"
              label="Name"
              type="text"
              size="small"
              value={formik.values.name}
              name="name"
              //onChange={(event) => setName(event.target.value)}
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              error={formik.touched.name && formik.errors.name}
              helperText = {formik.touched.name && formik.errors.name? formik.errors.name:""}
            />
            <TextField
              id="outlined-text-input-poster"
              label="Poster"
              type="text"
              size="small"
              value={formik.values.poster}
              name="poster"
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              error={formik.touched.poster && formik.errors.poster}
              helperText = {formik.touched.poster && formik.errors.poster? formik.errors.poster:""}
              //onChange={(event) => setPoster(event.target.value)}
            />
            <TextField
              id="outlined-text-input-rating"
              label="Rating"
              type="text"
              size="small"
              value={formik.values.rating}
              name="rating"
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              error={formik.touched.rating && formik.errors.rating}
              helperText = {formik.touched.rating && formik.errors.rating? formik.errors.rating:""}
              //onChange={(event) => setRating(event.target.value)}
            />
            <TextField
              id="outlined-text-input-summary"
              label="Summary"
              type="text"
              size="small"
              value={formik.values.summary}
              name="summary"
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              error={formik.touched.summary && formik.errors.summary}
              helperText = {formik.touched.summary && formik.errors.summary? formik.errors.summary:""}
              //onChange={(event) => setSummary(event.target.value)}
            />
            <TextField
              id="outlined-text-input-trailer"
              label="Trailer"
              type="text"
              size="small"
              value={formik.values.trailer}
              name="trailer"
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              error={formik.touched.trailer && formik.errors.trailer}
              helperText = {formik.touched.trailer && formik.errors.trailer? formik.errors.trailer:""}
              //onChange={(event) => setTrailer(event.target.value)}
            />
            <Button
              type="submit"
              //onClick={createMovie}
              variant="contained"
            >
              Add Movie
            </Button>
        </form>
        //</div>
    );
}

