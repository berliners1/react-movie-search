import React, { useState } from 'react';

function SearchControls(props) {
    const [title, setTitle] = useState('');
    
    const onChangeTitle = event => setTitle(event.target.value);

    //Pass API data to MoviesList here:
    function passApiData(event){
        event.preventDefault();
        props.childToParent(title);
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