import React, { useEffect, useState } from 'react'
import './NewItemForm.css'

export default function NewItemForm({ item, onSubmit, onCancel }) {

    const [_item, setItem] = useState({
        id: new Date().getTime().toString(),
        description: '',
        amount: ''
    });
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        if (item) {
            console.log("item exists")
            setItem(item);
            setEditing(true);
        }
    }, []);

    function onUpdate(e) {
        const name = e.target.name;
        const value = e.target.value;
        setItem({ ..._item, [name]: value });
    }

    function onFormSubmit(e) {
        e.preventDefault();
        if (!_item.description || !_item.amount) {
            return;
        }
        console.log("submitting item")
        onSubmit(_item);
        setItem({
            id: new Date().getTime().toString(),
            description: '',
            amount: ''
        });
        if (editing) {
            onCancel(); // close modal
        }
    }

    const cancelButton = <button type="button"
        onClick={onCancel}>Cancel</button>

    return (
        <form className="new-item-form"
            onSubmit={onFormSubmit}>
            <div className="field-body">

                <input type="number"
                    className="amount"
                    name="amount"
                    value={_item.amount}
                    onChange={onUpdate}
                    placeholder="Amount"
                    required />
                <input type="text"
                    className="description"
                    name="description"
                    value={_item.description}
                    onChange={onUpdate}
                    placeholder="Description"
                    required />
                {editing && cancelButton}
                <button type="submit"
                    className="add"
                    disabled={!_item.description || !_item.amount}>{editing ? "Save" : "Add"}</button>
            </div>
        </form>
    )
}
