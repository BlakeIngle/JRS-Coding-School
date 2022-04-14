import React, { useState } from 'react'
import ChildDumb from './ChildDumb'
import ChildSmart from './ChildSmart';

export default function ParentSmart() {

    const [dumbValue, setDumbValue] = useState(0);

    const [smartValue, setSmartValue] = useState(0);

    function foo(newValue) {
        // foo bar
        setSmartValue(newValue)
    }

    return (
        <div>
            Parent component

            <ChildDumb value={dumbValue} />
            <button onClick={() => {
                setDumbValue(dumbValue + 1);
            }}>+</button>

            <ChildSmart
                value={smartValue}
                setValue={foo}
            />

        </div>
    )
}
