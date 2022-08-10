import React from 'react'
import GroceryItem from './GroceryItem'
import GroceryItem2 from './GroceryItem2'
import './ToDo.css'

export default function GroceryList() {

    let item1 = {
        name: 'bananas',
        quantity: 5,
        category: 'fruit',
        isChecked: false
    }

    return (
        <div>
            <h1>Grocery List:</h1>
            <ul className="list-root">
                <GroceryItem2 {...item1} />
                <GroceryItem item="bananas" isChecked={true} quantity="5" />
                <GroceryItem item="butter" category="dairy" isChecked={false} quantity="4" />
                <GroceryItem item="milk" category="dairy" isChecked={true} quantity="1" />
                <GroceryItem item="eggs" isChecked={false} quantity="12" />
                <GroceryItem item="chicken" isChecked={true} quantity="1" />
                <GroceryItem item="cereal" isChecked={true} quantity="2" />
                <GroceryItem item="bread" isChecked={false} quantity="2" />
            </ul>
        </div>
    )
}
