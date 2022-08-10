import React from 'react'

export default function GroceryItem({ item, quantity, isChecked, category }) {


    return (
        <li className={category + (isChecked ? ' checked' : '')}>
            <span>{quantity} - {item}</span>
            <input type="checkbox" />
        </li>
    )
}
