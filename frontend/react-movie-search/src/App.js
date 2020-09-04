import React, { useState } from 'react';
import './App.css';
import Controls from './components/Controls';
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';

function App() {
    //state for <Movieslist>
    const[searchedMovieName, setSearchedMovieName] = useState("");
    const[searchedMoviePage, setSearchedMoviePage] = useState();

    //get data from Controls to send to MoviesList
    function addNewDataHandler(title, pagenum){
      setSearchedMovieName(title);
      setSearchedMoviePage(pagenum);
    }

  return (
    <>
      <Controls childToParent={addNewDataHandler} />
      <MoviesList title={searchedMovieName} pagenum={searchedMoviePage} />
      <MovieDetails />
    </>
  );
}

export default App;
