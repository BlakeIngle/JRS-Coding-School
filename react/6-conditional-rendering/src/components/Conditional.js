import React, { useState } from 'react'

export default function Conditional() {

    const [data, setData] = useState(null);

    setTimeout(() => {
        setData({ prop: 0 })
    }, 2000);

    if (data == null) {
        return (
            <div>...Loading...</div>
        );
    } else {
        return (
            <div>
                My Data: {data.prop || 'none'}
            </div>
        )
    }
}
