import React, { useState } from 'react';

function Controls(props) {
    const [title, setTitle] = useState('');
    const [pagenum, setPagenum] = useState(1);

    const onChangeTitle = event => setTitle(event.target.value);
    const onChangePagenum = event => setPagenum(event.target.value);

    //Pass API data to MoviesList here:
    function passApiData(event){
        event.preventDefault();
        props.childToParent(title, pagenum);
    }

    return (
        <>
        <form onSubmit={passApiData}>
            <input type="text" value={title} onChange={onChangeTitle} />
            <input type="number" value={pagenum} onChange={onChangePagenum} />
            <button type="submit">Search Movie</button>
        </form>
        </>
    );
}

export default Controls;