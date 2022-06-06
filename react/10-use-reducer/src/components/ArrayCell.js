import React, { useContext } from 'react'
import { StateContext } from './ArraySorter'

export default function ArrayCell({ value, selectCell, i, i1, i2 }) {

    const { state, dispatch } = useContext(StateContext);

    function onCellClicked() {
        dispatch({ type: 'select-index', payload: i })
    }

    return (
        <div className={`cell
                    ${state.i1 !== null && i == state.i1 && 'i1'}
                    ${state.i2 !== null && i == state.i2 && 'i2'}
                    `}
            onClick={onCellClicked}>{value}</div>
    )
}
