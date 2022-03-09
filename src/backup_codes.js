    <div>
    <div className="movie-container">
          <img src={movie.poster} alt={movie.name} className="movie-poster" />
          <div className="movie-specs">
            <h2 className="movie-name">
                {movie.name}
                <IconButton aria-label="Summary" onClick={() => setShow(!show)} className="bt-sz-lg" color="primary">
                  {show? <ExpandLessIcon/>: <ExpandMoreIcon/>}
                </IconButton>
                <InfoIcon onClick={() => navigate(`/movies/${id}`)}/>
            </h2>
            <p className="movie-rating"> ⭐{movie.rating}</p>
          </div>
          {/*<button onClick={() => setShow(!show)}>Summary 🔽</button>*}
          {/**Conditional Rendering */}
          {show? <p className="movie-summary">{movie.summary}</p>:""}
          <div className="movie-user-interactive-container">
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
          </div>
        </div>



    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <NavLink to="/" className="navbar-brand nav-link text-white">Home</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/Movies" className="nav-link text-white">List of Movies</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/AddMovie" className="nav-link text-white">Add movie</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Movies" element={<MovieList movieList={movieList} setMovieList={setMovieList} />}></Route>
          <Route path="/AddMovie" element={<AddMovie movieList={movieList} setMovieList={setMovieList}/>}></Route>
          <Route path="/Edit/:id" element={<AddMovie movieList={movieList} setMovieList={setMovieList}/>}></Route>
          <Route path="/Movies/:id" element={<MovieDetails movieList={movieList}/>}></Route>
          <Route path="/404" element={<PageNotFound/>}></Route>
          <Route path="*" element={<Navigate replace to="/404"/>}></Route>
       </Routes>
       </div>