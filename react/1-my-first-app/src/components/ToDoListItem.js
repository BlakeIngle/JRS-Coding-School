import React from 'react';

export default function ToDoListItem({ task }) {

    return (
        <div className="to-do-item">
            {task}
            <input type="checkbox"></input>
        </div>
    );
}
