import React from 'react'

export default function ParentComponent() {

    let jsValue = { label: 'value' }

    return (
        <div>
            <ChildComponent propName="Literal String" />
            <ChildComponent propName={jsValue} />
        </div>
    )
}

function ChildComponent({ propName, prop2, prop3 }) {
    return <p>{propName}</p>
}


