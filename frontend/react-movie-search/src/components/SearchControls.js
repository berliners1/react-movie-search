import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SearchControls(props) {
    const [title, setTitle] = useState('');
    const history = useHistory();
    
    const onChangeTitle = event => {
        setTitle(event.target.value);
    };

    //Pass API data to MoviesList here:
    function passApiData(event){
        event.preventDefault();
        props.childToParent(title);

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