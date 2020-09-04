import React, { useState } from 'react';

function Controls(props) {
    const [valueText, setValueText] = useState('');
    const [valueNum, setValueNum] = useState(0);

    const onChangeText = event => setValueText(event.target.value);
    const onChangeNum = event => setValueNum(event.target.value);

    //Pass API data to MoviesList here:
    function passApiData(){
        props.childToParent(valueText, valueNum);
    }

    return (
        <>
            <input type="text" value={valueText} onChange={onChangeText} />
            <input type="number" value={valueNum} onChange={onChangeNum} />
            <button onClick={passApiData}>Search Movie</button>
        </>
    );
}

export default Controls;