import React from 'react';

function SpecificMovieDetails(props){
    let item = props.items;
    return(
        <>
        <h1>{item.Title}</h1>
        <img src={item.Poster} alt={"Poster for " + item.Title} />
        <ul>
            <li>Year: {item.Year}</li>
            <li>Rated: {item.Rated}</li>
            <li>Released: {item.Released}</li>
            <li>Runtime: {item.Runtime}</li>
            <li>Director: {item.Director}</li>
            <li>Metascore: {item.Metascore}</li>
            <li>IMDB: {item.imdbRating}</li>
        </ul>
        <p>{item.Plot}</p>
        </>
    )

}

export default SpecificMovieDetails;