import React from 'react'

export default function GroceryItem2({ name, quantity, isChecked, category }) {


    return (
        <li className={category + (isChecked ? ' checked' : '')}>
            <span>{quantity} - {name}</span>
            <input type="checkbox" />
        </li>
    )
}
