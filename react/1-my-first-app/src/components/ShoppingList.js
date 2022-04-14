import React from 'react'
import './ShoppingList.css';

export default function ShoppingList({ myItems }) {

    return (
        <div className="shopping-list">
            <h1>Kroger</h1>
            <div>
                {myItems.map(item => (
                    <Item item={item} />
                ))}
            </div>
        </div>
    );
}

function Item({ item }) {
    return (
        <div className="list-item">
            <input type="checkbox" />
            <span>{item}</span>
        </div>
    );
}