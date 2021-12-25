import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import NewItemForm from './NewItemForm'
import './BudgetCalculator.css'

export default function BudgetCalculator() {


    var [budgetItems, setBudgetItems] = useState([]);
    const [total, setTotal] = useState(0);

    function addNewItem(newItem) {
        console.log("adding new item: ", newItem)
        setBudgetItems([...budgetItems, newItem]);
    }

    function removeItem(item) {
        setBudgetItems(budgetItems =>
            budgetItems.filter(_item =>
                item.id != _item.id
            )
        );
    }

    function editItem(item) {
        console.log("editing item")
        setBudgetItems(budgetItems.map(_item => {
            if (item.id !== _item.id) {
                return _item;
            } else {
                return item;
            }
        }));
    }

    useEffect(() => {
        setTotal(budgetItems.reduce((prevValue, nextItem) => {
            return prevValue + Number(nextItem.amount);
        }, 0)) // 0 is starting sum;
    }, [budgetItems]);

    return (
        <div className="budget-calculator-root">
            <div className="top-bar">
                <h1>Budget Calculator</h1>
            </div>

            <section className="total-budget-section">
                <h2 className={`${total > 0 ? 'green' : total < 0 ? 'red' : ''}`}>{total}</h2>
            </section>

            <section className="add-item-section">
                <div className="add-item-containter">
                    <NewItemForm onSubmit={addNewItem} />
                </div>
            </section>
            <ItemList items={budgetItems}
                removeItem={removeItem}
                editItem={editItem} />
            {/* <NewItemForm onSubmit={editItem} /> */}
        </div>
    )
}
