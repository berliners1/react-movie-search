import React, { useState } from 'react';

function Controls(props) {
    const [title, setTitle] = useState('');
    const [pagenum, setPagenum] = useState(1);

    const onChangeTitle = event => setTitle(event.target.value);
    const onChangePagenum = event => setPagenum(event.target.value);

    //Pass API data to MoviesList here:
    function passApiData(){
        props.childToParent(title, pagenum);
    }

    return (
        <>
            <input type="text" value={title} onChange={onChangeTitle} />
            <input type="number" value={pagenum} onChange={onChangePagenum} />
            <button onClick={passApiData}>Search Movie</button>
        </>
    );
}

export default Controls;