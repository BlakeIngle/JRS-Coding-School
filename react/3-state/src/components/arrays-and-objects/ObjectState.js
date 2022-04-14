import React, { useState } from 'react'

export default function ObjectState() {

    const [state, setState] = useState({
        count1: 0,
        count2: 0,
        count3: 0,
        count4: 0,
        count5: 0,
        count6: 0,
        count7: 0,
    });

    function handleClick1() {
        setState({
            ...state,
            count1: state.count1 + 1
        });
    }

    function handleClick2() {
        setState({
            count1: state.count1,
            count2: state.count2 + 1
        });
    }

    function updateState(propName, newValue) {
        setState({
            ...state,
            [propName]: newValue
        });
    }

    return (
        <div>
            <span>Count 1: {state.count1}</span>
            <button onClick={handleClick1}>+</button>
            <br />
            <span>Count 2: {state.count2}</span>
            <button onClick={handleClick2}>+</button>
        </div>
    )
}
