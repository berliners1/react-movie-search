import React, { useState } from 'react';
import './App.css';
import Controls from './components/Controls';
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';

function App() {
    //state for <Movieslist>
    const[searchedMovieName, setSearchedMovieName] = useState("");
    const[searchedMoviePage, setSearchedMoviePage] = useState();
    const[showMoviesList, setShowMoviesList] = useState(false);

    //get data from Controls to send to MoviesList
    function addNewDataHandler(title, pagenum){
      setSearchedMovieName(title);
      setSearchedMoviePage(pagenum);
      setShowMoviesList(true);
    }

  return (
    <>
      <Controls childToParent={addNewDataHandler} />
      {showMoviesList && <MoviesList title={searchedMovieName} pagenum={searchedMoviePage} />}
      <MovieDetails />
    </>
  );
}

export default App;
