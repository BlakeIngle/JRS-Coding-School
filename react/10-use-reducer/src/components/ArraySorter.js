import React, { createContext, useReducer, useState } from 'react'
import ArrayDisplay from './ArrayDisplay'
import './ArraySorter.css'
import { reducer } from '../assets/reducer'

export const StateContext = createContext(null);

export default function ArraySorter() {

    const [myArr, setMyArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [i1, setI1] = useState(null)
    const [i2, setI2] = useState(null)
    const [temp, setTemp] = useState(null)

    let initialState = {
        myArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        i1: null,
        i2: null,
        temp: null,
        newStateValue: 'whatever'
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    function resetArray() {
        dispatch({ type: 'reset' });
    }

    function onSwapClicked() {
        // temp = i1
        // i1 = i2
        // i2 = temp
        // reset all
        let a, b, c;
        a = temp;
        b = myArr[i1];
        c = myArr[i2];
        setTimeout(() => {
            // temp = arr[i1]
            setTemp(b);
        }, 500)
        setTimeout(() => {
            // arr[i1] = arr[i2]
            setMyArr(myArr.map((v, i) => {
                return i != i1 ? v : c
            }));
        }, 1500)
        setTimeout(() => {
            // arr[i2] = temp
            setMyArr(myArr => myArr.map((v, i) =>
                i != i2 ? v : b
            ))
        }, 2500)

        setTimeout(() => {
            setTemp(null)
            setI1(null)
            setI2(null)
        }, 3500);
    }

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            <div className="array-sorter">
                <h1>ArraySorter:</h1>
                <button onClick={resetArray}>Reset</button>
                <ArrayDisplay selectCell={(i1 == null && setI1) || (i2 == null && setI2) || (() => { })}
                    i1={i1}
                    i2={i2}
                    myArr={myArr} />
                <p>temp:</p>
                <div className="cell" style={{ margin: 'auto' }}>{temp}</div>
                <button
                    disabled={i1 == null || i2 == null}
                    onClick={onSwapClicked}>Swap</button>
                <br />
                <button>Sort Array</button>
            </div>
        </StateContext.Provider>
    )
}
