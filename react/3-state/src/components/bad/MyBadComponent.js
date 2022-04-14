import React from 'react'

export default function MyBadComponent() {

    let count = 0;

    function handleButtonClicked() {
        console.log('the button was clicked');
        count++;
        console.log(count);
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
