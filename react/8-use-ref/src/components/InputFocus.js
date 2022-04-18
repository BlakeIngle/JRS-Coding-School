import React, { useEffect, useRef } from 'react'

export default function InputFocus() {

    // const usernameRef = useRef(null);

    useEffect(() => {
        // usernameRef.current.focus();
    }, []);

    return (
        <form>
            <input type="text"
                placeholder='Not Focused'
            />
            <br />
            <input type="text"
                placeholder='Focused!'
            // ref={usernameRef}
            />
        </form>
    )
}
