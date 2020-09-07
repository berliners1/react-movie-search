import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function SearchControls(props) {
    const [title, setTitle] = useState('');
    const history = useHistory();
    const {t,p} = useParams();

    useEffect(() => {
        if(t && p){
            console.log('both t and p have inputs');
            props.childToParent(t, false);
        }

        //if title exists in url parameters, and if input is empty
        if(t && title === ""){
            console.log('t exists and form is empty');
            setTitle(t);
        }
    }, []);

    const onChangeTitle = event => {
        setTitle(event.target.value);
    };

    //Pass API data to MoviesList here:
    function passApiData(event){
        event.preventDefault();
        props.childToParent(title, true);

        history.push(`/t=${title}&p=1`);
        console.log('initialtest');
    }

    return (
        <>
        <form onSubmit={passApiData}>
            <input type="text" value={title} onChange={onChangeTitle} />
            <button type="submit">Search Movie</button>
        </form>
        </>
    );
}

export default SearchControls;