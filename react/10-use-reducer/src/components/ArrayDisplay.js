import React from 'react'
import ArrayCell from './ArrayCell'

export default function ArrayDisplay({ myArr, selectCell, i1, i2 }) {

    return (
        <div>
            <h2>Your Array:</h2>

            <div className="array-actual">
                {myArr.map((v, i) => (
                    <ArrayCell key={i}
                        selectCell={selectCell}
                        value={v}
                        i={i}
                        i1={i1}
                        i2={i2} />
                ))}
            </div>
        </div>
    )
}
