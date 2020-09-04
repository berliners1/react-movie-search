import React from 'react';
import './App.css';
import Controls from './components/Controls';
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';

function App() {

    //get data from Controls to send to MoviesList
    function addNewDataHandler(data, num){
      console.log(data, num);
    }

  return (
    <>
      <Controls childToParent={addNewDataHandler} />
      <MoviesList />
      <MovieDetails />
    </>
  );
}

export default App;
