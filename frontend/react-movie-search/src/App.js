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
    const[pageReset, setPageReset] = useState(null);

    //get data from Controls to send to MoviesList
    function addNewDataHandler(title){
      setSearchedMovieName(title);
      setShowMoviesList(true);
      setPageReset(true); //reset pages on each title search
    }

  return (
    <>
      <SearchControls childToParent={addNewDataHandler} />
      {showMoviesList && <MoviesList title={searchedMovieName} pageReset={pageReset} />}
      <MovieDetails />
    </>
  );
}

export default App;
