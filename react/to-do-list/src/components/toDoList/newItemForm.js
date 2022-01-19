import React, { useState } from 'react'

export default function NewItemForm({ addToList }) {

    var [text, setText] = useState('')

    function addNewItem(e) {
        e.preventDefault();
        if (text) {
            addToList({
                text: text,
                isDone: false,
                id: new Date().getTime().toString()
            });
            setText('');
        }
    }

    return (
        <div className="">
            <form onSubmit={addNewItem}>
                <input type="text"
                    placeholder="To Do"
                    value={text}
                    onChange={e => {
                        setText(e.target.value)
                    }} />
                <button type="submit">+</button>
            </form>
        </div>
    )
}
