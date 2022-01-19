import React, { useState } from 'react'

export default function ListItem({ id, text, isDone, removeFromList, editItem }) {

    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(text);

    function deleteItem() {
        // delete some item
        console.log("deleting item")
        console.log(id)
        removeFromList(id);
    }

    function updateText(e) {
        e.preventDefault();
        editItem({
            id,
            text: newText,
            isDone
        });
        setIsEditing(false);
    }

    function cancelEdit() {
        setNewText(text);
        setIsEditing(false);
    }

    if (isEditing) {
        return (
            <form onSubmit={updateText}>
                <div className="list-item">
                    <input type="text"
                        autoFocus
                        value={newText}
                        onChange={e => setNewText(e.target.value)} />
                    <span>
                        <button type="submit">Save</button>
                        <button type="button"
                            onClick={cancelEdit}>Cancel</button>
                    </span>
                </div>
            </form>
        )
    } else {
        return (
            <div className="list-item">
                <span onClick={() => setIsEditing(true)}>{text}</span>
                <span>
                    <input type="checkbox"
                        checked={isDone}
                        onChange={(e) => {
                            editItem({
                                id,
                                text,
                                isDone: e.target.checked
                            });
                        }} />
                    <button onClick={deleteItem} >
                        &times;
                    </button>
                </span>
            </div>
        )
    }
}
