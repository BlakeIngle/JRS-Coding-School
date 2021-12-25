import React, { useEffect, useState } from "react";
import "./BudgetItem.css";
import EditItemModal from "./EditItemModal";

export default function BudgetItem({ item, removeItem, editItem }) {

    const [showModal, setShowModal] = useState(false);

    function onXButtonClicked() {
        removeItem(item);
    }

    function onItemClicked() {
        console.log("item clicked");
        setShowModal(true);
    }

    useEffect(() => {
        console.log(showModal);
    }, [showModal]);

    function onCancel() {
        setShowModal(false);
    }

    function onSave(_item) {
        editItem(_item);
        setShowModal(false);
    }

    return (
        <>
            <div className="budget-item-root">
                <div className="budget-item" onClick={onItemClicked}>
                    <div className="description">
                        <p>{item.description}</p>
                    </div>

                    <div className={`amount ${item.amount > 0 ? "income" : "expense"}`}>
                        <p>{item.amount}</p>
                    </div>
                </div>
                <div className="x-icon-button" onClick={onXButtonClicked}>
                    &times;
                </div>
            </div>
            {showModal && (
                <div className="dialog-background">
                    <div className="dialog">
                        <EditItemModal
                            item={item}
                            onSubmit={onSave}
                            onCancel={onCancel}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
