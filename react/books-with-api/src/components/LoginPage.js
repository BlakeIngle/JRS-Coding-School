import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import './login.css';

import { Context } from '../App';
import { Link } from 'react-router-dom';

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

    var { http, state, setState, localStorageService } = useContext(Context);
    const navigate = useNavigate();
    const animationTime = 300;

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const emailRef = useRef(null);
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
        if (user.email && user.password) {

            // do something
            http.login(user)
                .then(res => {
                    // 200 -> login successful
                    console.log(res.data.user)
                    localStorageService.saveUser(res.data.user);
                    navigate(`/user/${res.data.user.id}`);
                }).catch(err => {
                    console.error(err)

                    emailRef.current.classList.add("shake");
                    passwordRef.current.classList.add("shake");

                    setUser({ email: '', password: '' });

                    setTimeout(() => {
                        emailRef.current.classList.remove("shake");
                        passwordRef.current.classList.remove("shake");
                    }, animationTime);
                });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="text"
                ref={emailRef}
                name="email"
                value={user.email}
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