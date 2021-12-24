import React, { useState } from 'react';
import './counter.css'

export default function Counter() {

    var [count, setState] = useState(0)


    function increaseCount() {
        setState(count + 1)
    }
    function decreaseCount() {
        setState(count - 1)
    }

    return (
        <>
            <h2>{count}</h2>
            <button onClick={decreaseCount}>-1</button>
            <button onClick={increaseCount}>+1</button>
        </>)
}