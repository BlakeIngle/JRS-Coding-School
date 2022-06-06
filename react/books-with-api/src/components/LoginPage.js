import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import './login.css';

import { Context } from '../App';
import { Link } from 'react-router-dom';
import { useAxios } from '../services/axios.service';

export default function LoginPage() {

    return (
        <div className="login">
            <br />
            <br />
            <LoginForm />
            <hr />
            <Link to="/signup">
                <button type="button">Sign Up</button>
            </Link>
        </div>
    )
}

function LoginForm() {

    var { state, setState, localStorageService } = useContext(Context);
    const navigate = useNavigate();
    const http = useAxios();
    const animationTime = 300;

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

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
        if (user.username && user.password) {

            // do something
            http.login(user.username, user.password)
                .then(res => {
                    // 200 -> login successful
                    console.log(res.data.user)
                    localStorageService.saveUser(res.data.user);
                    navigate(`/user/${res.data.user.id}`);
                }).catch(err => {
                    console.error(err)

                    usernameRef.current.classList.add("shake");
                    passwordRef.current.classList.add("shake");

                    setUser({ username: '', password: '' });

                    setTimeout(() => {
                        usernameRef.current.classList.remove("shake");
                        passwordRef.current.classList.remove("shake");
                    }, animationTime);
                });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text"
                ref={usernameRef}
                name="username"
                value={user.username}
                style={{ "--animationTime": `${animationTime}ms` }}
                onChange={handleChange} />
            <br />

            <label>Password:</label>
            <input type="password"
                ref={passwordRef}
                name="password"
                value={user.password}
                style={{ "--animationTime": `${animationTime}ms` }}
                onChange={handleChange} />
            <br />

            <button type="submit">Log In</button>
        </form>
    )
}