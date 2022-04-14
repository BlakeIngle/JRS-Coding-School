import React, { useEffect, useState } from 'react'

export default function Alert() {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    function handleButtonClicked() {
        setCount(count + 1);
    }
    function handleButtonClicked2() {
        setCount2(count2 + 1);
    }

    function doSomething() {
        alert('count: ' + count);
    }

    useEffect(() => {
        // code that will execute 
        // when the component renders
        console.log("use effect triggered");
        if (count != 0) {
            doSomething();
        }
    }, [count]);

    useEffect(() => {
        console.log("hello world");
    }, [count2]);

    return (
        <div>
            <div>Count : {count}</div>
            <button onClick={handleButtonClicked}>+</button>
            <div>Count 2: {count2}</div>
            <button onClick={handleButtonClicked2}>+</button>
        </div>
    );
}
