import React from 'react';

function MoviesListGrid(props){
    return(
        <ul>
            {props.items.map(item => (
            <li key={item.imdbID}>
                {item.Title}
            </li>
            ))}
        </ul>
    )

}

export default MoviesListGrid;