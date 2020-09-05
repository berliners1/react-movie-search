import React, { useState } from 'react';
import './App.css';
import SearchControls from './components/SearchControls';
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';

function App() {
    //state for <Movieslist>
    const[searchedMovieName, setSearchedMovieName] = useState("");
    const[searchedMoviePage, setSearchedMoviePage] = useState();
    const[showMoviesList, setShowMoviesList] = useState(false);

    //get data from Controls to send to MoviesList
    function addNewDataHandler(title){
      setSearchedMovieName(title);
      setShowMoviesList(true);
    }

  return (
    <>
      <SearchControls childToParent={addNewDataHandler} />
      {showMoviesList && <MoviesList title={searchedMovieName} />}
      <MovieDetails />
    </>
  );
}

export default App;
