import React, { useEffect, useState } from "react";

export default function TitleUpdater() {

    var [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("re-rendered")
        if (count > 0) {
            document.title = `button clicked (${count})`;
        }
    });

    return (
        <>
            <p>{count}</p>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}