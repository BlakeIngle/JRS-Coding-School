import React, { useEffect, useRef, useState } from 'react'

export default function StopWatch() {

    const [count, setCount] = useState(0);
    // const timerInterval = useRef(null); 
    // the timer interval does not effect the rendering of the webpage
    // so it is more 'appropriate' to store this value as 
    // a 'useRef' value. useState is also allowed.

    function onStartClicked() {
        // timerInterval.current = setInterval(() => {
        //     setCount(c => (c + 1)); // an => function is allowed
        // }, 1000);
        // increment the 'count' state variable every 1 second
    }

    function onStopClicked() {
        // clearInterval(timerInterval.current); // stop the interval
        // timerInterval.current = null; // reset to null;
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onStartClicked} >Start</button>
            <button onClick={onStopClicked} disabled={count == 0}>Stop</button>
        </div>
    )
}
