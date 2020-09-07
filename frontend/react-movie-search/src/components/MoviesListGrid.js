import React from 'react';
import {NavLink} from "react-router-dom";

function MoviesListGrid(props){

    return(
        <ul>
            {props.items.map(item => (
            <NavLink key={item.imdbID} to={"/movie/"+item.Title}>
                <li>
                    {item.Title}
                </li>
            </NavLink>

            ))}
        </ul>
    )

}

export default MoviesListGrid;