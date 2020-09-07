import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchControls from './components/SearchControls';
import MoviesList from './components/MoviesList';
import DetailsView from './components/DetailsView';

function App() {
    //state for <Movieslist>
    const[searchedMovieName, setSearchedMovieName] = useState("");
    const[showMoviesList, setShowMoviesList] = useState(false);
    const[pageReset, setPageReset] = useState(null);

    //get data from Controls to send to MoviesList
    function addNewDataHandler(title, ifToReset){
      setSearchedMovieName(title);
      setShowMoviesList(true);
      setPageReset(ifToReset); //reset pages on each title search
      console.log('runs only on submit?');
    }


  return (
    <>
    <Router>
    
      <Switch>
        <Route path={["/", "/t=:t&p=:p"]} exact > 
          <SearchControls childToParent={addNewDataHandler} />
          {showMoviesList && <MoviesList title={searchedMovieName} pageReset={pageReset} />}
        </Route>

        <Route path="/movie/:movietitle" exact>
          <DetailsView />
        </Route>
      </Switch>

    </Router>
    </>
  );
}

export default App;
