import React from 'react'

export default function ArrayCell({ value, selectCell, i, i1, i2 }) {

    function onCellClicked() {
        selectCell(i)
    }

    return (
        <div className={`cell
                    ${i1 !== null && i == i1 && 'i1'}
                    ${i2 !== null && i == i2 && 'i2'}
                    `}
            onClick={onCellClicked}>{value}</div>
    )
}
