import React from 'react'
import NewItemForm from './NewItemForm'
import './EditItemModal.css'

export default function EditItemModal({ item, onSubmit, onCancel }) {
    return (
        <div className="edit-item-modal">
            <h1>Edit</h1>
            <NewItemForm item={item}
                onSubmit={onSubmit}
                onCancel={onCancel} />
        </div >
    )
}
