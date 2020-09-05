import React, { useState, useEffect } from 'react';

function MoviesList(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [pagenum, setPagenum] = useState(1);
  useEffect(() => {
    fetch(`http://localhost:5000/api/s=${props.title}&page=${pagenum}`)
      .then(res => res.json())
      .then(
        (result) => {
          setError(null);
          setIsLoaded(true);
          setItems(result.Search);
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

  const onChangePagenum = event => setPagenum(event.target.value);

  if (error) {
    return <div>Error - could not search with these queries.</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (items === undefined){
    return <p>Could not find anything.</p>
  } else {
    return (
      <>
      <div className="search-controls">
        <input type="number" value={pagenum} onChange={onChangePagenum} />
      </div>
      <ul>
        {items.map(item => (
          <li key={item.imdbID}>
            {item.Title}
          </li>
        ))}
      </ul>
      </>
    );
  }

}

export default MoviesList;
