import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Context } from '../App';

export default function SignUpPage() {

    const { http, localStorageService } = useContext(Context);
    const navigate = useNavigate();

    function attemptSignUp(user) {
        http.createNewUser(user)
            .then(res => {
                // do something
                const user = res.data.user;
                console.log(user);
                localStorageService.saveUser(user);
                navigate(`/user/${user.id}`);
            }).catch(err => {
                console.error(err);
            });
    }

    return (
        <div className="login">
            <br />
            <br />
            <SignUpForm onSubmit={attemptSignUp} http={http} />
            <hr />
            <Link to="/login">
                <button type="button">Log In</button>
            </Link>
        </div>
    )
}

function SignUpForm({ onSubmit, http }) {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [isEmailTaken, setIsEmailTaken] = useState(true);

    function handleChange(e) {
        var name = e.target.name;
        var value = e.target.value;

        setUser({
            ...user,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (user.email && user.password) {
            onSubmit(user);
        }
    }

    useEffect(() => {
        http.getUserByEmail(user.email)
            .then(res => {
                // never happens
                // login will always fail due to buisness logic
            }).catch(err => {
                console.log(err, err.response)
                if (err.response.status == 404) {
                    // no user found
                    console.log("no user found")
                    setIsEmailTaken(false);
                } else if (err.response.status == 401) {
                    // user exists
                    console.log("email taken")
                    setIsEmailTaken(true);
                } else {
                    console.error(err);
                }
            });
    }, [user.email]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="email">
                {isEmailTaken && <div className="error-message">* Email is already taken *</div>}
                <label >Email:</label>
                <input type="text"
                    className={isEmailTaken ? 'email-taken' : ''}
                    name="email"
                    required
                    value={user.email}
                    onChange={handleChange} />
            </div>

            <label>Password:</label>
            <input type="password"
                name="password"
                value={user.password}
                onChange={handleChange} />
            <br />

            <button type="submit"
                disabled={!user.email || !user.password}>Sign Up</button>
        </form>
    )
}