import React from 'react';
import './SpecificMovieDetails.css';

function SpecificMovieDetails(props){
    let item = props.items;
    return(
        <>
        <h2>{item.Title}</h2>
        <div className="details">
            <div className="details-left">
                {item.Poster === "N/A" || item.Poster === undefined ? 
                (<div className="no-poster-found">No Poster Found</div>) : 
                <img src={item.Poster} alt={"Poster for " + item.Title} />}
                <p>{item.Plot}</p>
            </div>
            <div className="details-right">
                <ul>
                    <li>Year: {item.Year}</li>
                    <li>Rated: {item.Rated}</li>
                    <li>Released: {item.Released}</li>
                    <li>Runtime: {item.Runtime}</li>
                    <li>Director: {item.Director}</li>
                    <li>Metascore: {item.Metascore}</li>
                    <li>IMDB: {item.imdbRating}</li>
                </ul>
            </div>
        </div>
        </>
    )

}

export default SpecificMovieDetails;