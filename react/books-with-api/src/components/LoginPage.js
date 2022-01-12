import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import './login.css';

import { Context } from '../App';
import { Link } from 'react-router-dom';

export default function LoginPage() {

    var { http, state, setState, localStorageService } = useContext(Context);

    const navigate = useNavigate();

    function attemptLogin(user) {
        // do something
        http.login(user)
            .then(res => {
                // 200 -> login successful
                console.log(res.data.user)
                localStorageService.saveUser(res.data.user);
                navigate(`/user/${res.data.user.id}`);
            }).catch(err => {
                console.error(err)
                // maybe a 404 -> bad email
                // maybe 4xx -> good email, bad password
            });
    }

    return (
        <div className="login">
            <br />
            <br />
            <LoginForm onSubmit={attemptLogin} />
            <hr />
            <Link to="/signup">
                <button type="button">Sign Up</button>
            </Link>
        </div>
    )
}

function LoginForm({ onSubmit }) {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

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

    return (
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="text"
                name="email"
                value={user.email}
                onChange={handleChange} />
            <br />

            <label>Password:</label>
            <input type="password"
                name="password"
                value={user.password}
                onChange={handleChange} />
            <br />

            <button type="submit">Log In</button>
        </form>
    )
}