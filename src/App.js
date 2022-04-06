import './App.css';
import {AddMovie} from'./AddMovie';
import {MovieList} from'./MovieList';
import {EditMovie} from'./EditMovie';
import {useState} from 'react';
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom'
import {MovieDetails} from './MovieDetails';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';



function App() {
  //lifing up the state of the movie list as it is used by both App page and AddMovie page
  //const INITIAL_MOVIE_LIST =  require('./movie_list.json').movies;
  //const [movieList,setMovieList] = useState(INITIAL_MOVIE_LIST);
  
  const navigate = useNavigate();
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={5} className="paper-container">
      <div>
        <AppBar position="static">
          <Toolbar>
           <nav className="navbar navbar-expand-lg"> 
              <Button className="navbar-brand nav-link text-white" onClick={()=> navigate('/')}>Home</Button>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button> 
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <Button color="inherit" onClick={()=>navigate('/Movies')} className="nav-link text-white">List of Movies</Button>
                  <Button color="inherit" onClick={()=>navigate('/AddMovie')} className="nav-link text-white">Add movie</Button>
               </div> 
          </nav>
          <IconButton sx={{ ml: 1 }} color="inherit" onClick={() => setMode(mode === 'dark'? "light":"dark")}>
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>{mode} mode
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Movies" element={<MovieList  />}></Route>
          <Route path="/AddMovie" element={<AddMovie />}></Route>
          <Route path="/Edit/:id" element={<EditMovie />}></Route>
          <Route path="/Movies/:id" element={<MovieDetails />}></Route>
          <Route path="/404" element={<PageNotFound/>}></Route>
          <Route path="*" element={<Navigate replace to="/404"/>}></Route>
        </Routes>
      </div>
      </Paper>
    </ThemeProvider>
  );
}

function Home(){
  //movieList={movieList} setMovieList={setMovieList}
  return <div>
    <h1>Welcome to my Favourite Movie list! </h1>
    <p>Here I have listed my favorite movies..And the site is still in progress!</p>
    <p>For now, We can perform CRUD Operations(Create, Read, Update & Delete) here</p>
    <p>Hope you'll like it😀</p>
  </div>
}

function PageNotFound(){
  return <div className="error-page">
    <img src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif" alt="page not found" />
  </div>
}


export default App;
