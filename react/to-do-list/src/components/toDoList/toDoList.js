import React, { useEffect, useState } from 'react';
import List from './list';
import NewItemForm from './newItemForm';
import './toDoList.css';

export default function ToDoList() {

    var [list, setList] = useState([]);

    function addToList(newItem) {
        setList([...list, newItem]);
    }

    function removeFromList(id) {
        setList(list.filter(item => item.id !== id))
    }

    function editItem(item) {

        var newList = [...list];
        var i = newList.findIndex(_item => _item.id === item.id)
        newList[i] = { ...item };
        setList(newList);
    }

    useEffect(() => {
        console.log('list updated', list)
    }, [list])

    return (
        <div className="to-do-list">
            <h1>To Do : </h1>
            <List list={list}
                removeFromList={removeFromList}
                editItem={editItem} />
            <NewItemForm addToList={addToList} />
        </div>
    )
}
