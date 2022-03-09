//NOT USED AS OF NOW

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import {useNavigate} from 'react-router-dom'


export function NavigationBar({mode,setMode,theme}){
    const navigate = useNavigate();
    return(
    <Box sx={{ flexGrow: 1 }}>
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
        <IconButton sx={{ ml: 1 }} color="inherit" onClick={theme === 'dark'? setMode("light"):setMode("dark")}>
        {mode} mode{theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    );

}