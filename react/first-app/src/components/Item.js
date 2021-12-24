import React from "react";

export default function Item({ itemName, quantity }) {

    return (
        <li>
            <input type="checkbox"></input>
            <label>{quantity} {itemName}</label>
        </li>
    )
}