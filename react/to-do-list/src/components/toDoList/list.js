import React, { useEffect, useState } from 'react'
import ListItem from './listItem';

export default function List({ list, removeFromList, editItem }) {

    var listItems = list.map((item) =>
        <ListItem key={item.id}
            id={item.id}
            text={item.text}
            isDone={item.isDone}
            removeFromList={removeFromList}
            editItem={editItem} />
    );

    return (
        <div className="list-column">
            {listItems}
        </div>
    )
}
