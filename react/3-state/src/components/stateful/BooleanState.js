import React, { useState } from 'react'

export default function BooleanState() {

    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            <div>{isOn ? 'On' : 'Off'}</div>

            <button onClick={() => {
                setIsOn(!isOn);
            }}>Switch</button>

            <button onClick={() => {
                setIsOn(true);
            }}>On</button>

            <button onClick={() => {
                setIsOn(false)
            }}>Off</button>
        </div>
    )
}
