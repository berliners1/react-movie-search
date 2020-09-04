import React from 'react';

function MoviesList(props) {

    //will fetch list of movies
    return( 
    <>
        <p>{props.title}</p>
        <p>{props.pagenum}</p>
    </>
    );

}

export default MoviesList;
