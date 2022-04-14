import React, { useState } from 'react'

export default function ClickCounter() {

    const [count, setCount] = useState(10);

    function handleButtonClicked() {
        setCount(count);
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={handleButtonClicked}>
                Click Me!
            </button>
        </div>
    );
}
