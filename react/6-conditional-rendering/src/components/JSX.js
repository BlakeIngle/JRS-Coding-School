import React from 'react';

let username = 'blake'
let birthday = new Date();

let stuff = [1, 3, 4];

<div>
    {stuff.map((s) => {
        s == 5 ? s : 0
    })}

</div>