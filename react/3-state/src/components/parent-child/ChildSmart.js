import React from 'react'

export default function ChildSmart({ value, setValue }) {
    return (
        <div>
            Child Smart value: {value}
            <button onClick={() => {
                setValue(value + 1);
            }}>+</button>
        </div>
    )
}
