import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import { Context } from '../App'

export default function UserPage() {

    const { http, state, localStorageService, setState } = useContext(Context);
    const { userId } = useParams();
    const navigate = useNavigate();

    var validateUser = state.user?.id == userId;

    function handleLogOut() {
        if (validateUser) {
            console.log("logging out")
            localStorageService.removeActiveUser();
            setState({ ...state, user: null });
            navigate('/login');
        }
    }

    useEffect(() => {
        if (state.user) {
            // someone is logged in
            // enable logged-in user features
            //  ex: liking a post, adding friend

            if (state.user.id == userId) {
                // logged in user is viewing own page
            }
        } else {
            // not logged in
        }
    }, []);

    return (
        <div>
            user page works
            {validateUser && <button type="button" onClick={handleLogOut}>Log Out</button>}
        </div>
    )
}
