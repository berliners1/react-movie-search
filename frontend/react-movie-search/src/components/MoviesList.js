import React, { useState, useEffect } from 'react';

function MoviesList(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/s=${props.title}&page=${props.pagenum}`)
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
  }, [props.title, props.pagenum])

  if (error) {
    return <div>Error - could not search with these queries.</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (items === undefined){
    return <p>Could not find anything.</p>
  } else {
    return (
      <>
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
