import React, { useState, useEffect } from 'react';
import {useParams, useHistory} from "react-router-dom";
import SpecificMovieDetails from './SpecificMovieDetails';
import './DetailsView.css';

function DetailsView() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const history = useHistory();

    //will fetch details of specific movie based on url
    let {movietitle} = useParams();

    useEffect(() => {
        console.log(history);
        fetch(`http://localhost:5000/api/t=${movietitle}`)
        .then(res => res.json())
        .then(
            (result) => {
                setError(null);
                setIsLoaded(true);
                setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [movietitle])

    const goBackFunction = () => {
        if(history.length > 2){
            history.goBack();
        } else {
            history.push(`/`);
        }
    }

    if (error) {
    return <div>Error - could not search for a movie.</div>;
    } else if (!isLoaded) {
    return <div>Loading...</div>;
    } else if (items === undefined){
    return <p>Could not find anything.</p>
    } else {
    return (
        <>
            <button onClick={goBackFunction} className="back-button">Back</button>
            <SpecificMovieDetails items={items} />
        </>
        );
    }
}

export default DetailsView;