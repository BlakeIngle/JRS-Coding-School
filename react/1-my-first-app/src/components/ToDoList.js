import React from 'react'
import ToDoListItem from './ToDoListItem';
import './ToDoList.css'

export default function ToDoList() {

    return (
        <div className="to-do-list">

            <ToDoListItem task="Fold Laundry" />
            <ToDoListItem task="Walk The Dog" />
            <ToDoListItem task="Eat Dinner" />
            <ToDoListItem task="Read On The Beach" />

        </div>
    );
}
