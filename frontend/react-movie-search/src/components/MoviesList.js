import React, { useState, useEffect } from 'react';
import axios from 'axios';

  function MoviesList(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:5000/api/s=${props.title}&page=${props.pagenum}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.Search);
            console.log('api call run');
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
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.Title}>
              {item.Title}
            </li>
          ))}
        </ul>
      );
    }


}

export default MoviesList;
