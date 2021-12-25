import React from "react";
import BudgetItem from "./BudgetItem";
import './ItemList.css'

export default function ItemList({ items, removeItem, editItem }) {

    return (
        <section className="budget-items-section">
            <div className="budget-items-container">
                <div className="income-column">
                    <h1>Income</h1>
                    <div>
                        {items
                            .filter((item) => item.amount > 0)
                            .map((item) => (
                                <BudgetItem key={item.id}
                                    item={item}
                                    removeItem={removeItem}
                                    editItem={editItem} />
                            ))}
                    </div>
                </div>

                <div className="expenses-column">
                    <h1>Expenses</h1>
                    <div>
                        {items
                            .filter((item) => item.amount < 0)
                            .map((item) => (
                                <BudgetItem key={item.id}
                                    item={item}
                                    removeItem={removeItem}
                                    editItem={editItem} />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
