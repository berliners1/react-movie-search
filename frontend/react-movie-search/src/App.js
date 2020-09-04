import React from 'react';
import './App.css';
import Controls from './components/Controls';
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <>
      <Controls />
      <MoviesList />
      <MovieDetails />
    </>
  );
}

export default App;
