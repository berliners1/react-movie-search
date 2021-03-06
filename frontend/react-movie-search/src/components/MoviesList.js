import React, { useState, useEffect } from 'react';
import { useHistory, NavLink, useParams } from 'react-router-dom';
import MoviesListGrid from './MoviesListGrid';
import './MoviesList.css';

let firstRun = true;
function MoviesList(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsAmt, setItemsAmt] = useState(null);

  const {t,p} = useParams();
  const [pagenum, setPagenum] = useState(p); //used to be hardcoded 1
  const [resetPagenum, setResetPagenum] = useState(props.pageReset);

  const history = useHistory();
  useEffect(() => {
    console.log(history);
    setResetPagenum(props.pageReset);

    if(resetPagenum === true){
      setResetPagenum(false);
      console.log('reset-is-true');

      if(firstRun){ //this should only run on direct form submit, and not browser back.
        console.log('only-form-submit');
        firstRun = false;
        history.push(`/t=${props.title}&p=1`)
      } else { //This should only run on browser back, and not submit.
        console.log('only-back-not-submit')
        history.push(`/t=${props.title}&p=${p}`)
      }
    }//Page change functions will skip this if block.

    fetch(`http://localhost:5000/api/s=${props.title}&page=${p}`)
    .then(res => res.json())
    .then(
      (result) => {
        setError(null);
        setIsLoaded(true);
        setItems(result.Search);
        setItemsAmt(result.totalResults);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [pagenum, props.title])

  let pages = Math.ceil(itemsAmt / 10);

  const onChangePagenum = i => {
    setPagenum(i+1);
    setResetPagenum(false);
  };

  if (error) {
    return <div>Error - could not search with these queries.</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (items === undefined){
    return <p>Could not find anything.</p>;
  } else {
    if(pages){
      return (
        <>
        <div className="pagination-controls">
          <div className="stats">
            <p>Pages: {pages}</p>
            <p>Movies: {itemsAmt}</p>
            <p className="page-indicator">Current Page: {p}</p>
          </div>
  
          <div className="all-pages">
          {[...Array(pages)].map((x, i) => (
            <span key={i+1}> 
              <NavLink to={`/t=${props.title}&p=${parseInt(i+1)}`} onClick={() => onChangePagenum(i)}>{i+1}</NavLink>
            </span>
          ))}
          </div>
          
        </div> 
        
  
        <MoviesListGrid items={items} />
  
        </>
      );
    } else {
      return <p>Search failed for unknown reason.</p>
    }

  }

}

export default MoviesList;
