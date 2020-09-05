import React, { useState, useEffect } from 'react';
import MoviesListGrid from './MoviesListGrid';


function MoviesList(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsAmt, setItemsAmt] = useState(null);

  const [pagenum, setPagenum] = useState(1);
  const [resetPagenum, setResetPagenum] = useState(props.pageReset);
  
  let url;
  useEffect(() => {
    setResetPagenum(props.pageReset);
    if(resetPagenum === true){
      url = `http://localhost:5000/api/s=${props.title}&page=1`
      setPagenum(1);
      setResetPagenum(false);
    } else {
      url = `http://localhost:5000/api/s=${props.title}&page=${pagenum}`
    }
    fetch(url)
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
  }, [props.title, pagenum])

  let pages = Math.ceil(itemsAmt / 10);

  const onChangePagenum = event => {
    setPagenum(event.target.value);
    setResetPagenum(false);
  };

  const pageBack = () => {
    setResetPagenum(false);
    if(pagenum > 1){
      setPagenum(pagenum - 1);
    }
  }
  
  const pageForward = () => {
    setResetPagenum(false);
    if(pagenum < pages){
      setPagenum(parseInt(pagenum) + 1);
    }
  }

  if (error) {
    return <div>Error - could not search with these queries.</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (items === undefined){
    return <p>Could not find anything.</p>
  } else {
    return (
      <>
      <div className="pagination-controls">
        <p>pages: {pages} -- items: {itemsAmt}</p>

        <select value={pagenum} onChange={onChangePagenum}>
          {[...Array(pages)].map((x, i) =>
            <option value={i+1} key={i+1}>{i+1}</option>
          )}
        </select>

        <button onClick={pageBack}>«</button>
        <button onClick={pageForward}>»</button>
      </div>

      <MoviesListGrid items={items} />
      </>
    );
  }

}

export default MoviesList;
