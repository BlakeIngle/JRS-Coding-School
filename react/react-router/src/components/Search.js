import React, { useEffect, useState } from 'react'

export default function Search({ liveUpdate }) {

    const [fields, setFields] = useState({
        name: '',
        power: '',
        nemesisName: '',
        alignment: null
    });

    function onUpdate(e) {
        var name = e.target.name;
        var value = e.target.value;

        setFields({
            ...fields,
            [name]: value
        });
    }

    useEffect(() => {
        if (liveUpdate) {
            liveUpdate(fields);
        }
    }, [fields]);

    return (
        <div>
            <input type="text" name="name" value={fields.name} onChange={onUpdate} />
        </div>
    )
}
