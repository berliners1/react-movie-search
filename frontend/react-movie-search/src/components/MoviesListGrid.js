import React from 'react';
import {NavLink} from "react-router-dom";
import './MoviesListGrid.css';

function MoviesListGrid(props){

    return(
        <ul className="movies-container">
            {props.items.map(item => (
                <li key={item.imdbID} className="movie-listitem">
                    <NavLink to={"/movie/"+item.Title} className="movie-link">
                        <div className="title-and-year">
                            <span className="title">{item.Title}</span>
                            <span className="year">{item.Year}</span>
                        </div>
                        
                        {item.Poster === "N/A" ? 
                        (<div class="no-poster-found">No Poster Found</div>) : 
                        <img src={item.Poster} alt={"Poster for " + item.Title} />}
                    </NavLink>
                </li>

            ))}
        </ul>
    )

}

export default MoviesListGrid;