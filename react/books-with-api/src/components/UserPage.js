import React, { useContext, useEffect } from 'react'
import { Context } from '../App'

export default function UserPage() {

    const { http, state } = useContext(Context);

    useEffect(() => {
        if (state.user) {
            // someone is logged in
        } else {
            // not logged in
        }
    }, []);

    return (
        <div>
            user page works
        </div>
    )
}
