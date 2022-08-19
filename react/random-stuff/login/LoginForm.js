import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function LoginForm() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [wasLoginFailed, setWasLoginFailed] = useState(false);
    const [isPasswordVisible, setisPasswordVisible] = useState(false);

    function handleFormSubmit(e) {
        e.preventDefault();
        // change this***
        setWasLoginFailed(true);
    }

    function handleInputChange(e) {
        let { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <div className="login-form-container">
            <h2>Login</h2>
            <form className="login-form"
                onSubmit={handleFormSubmit}
            >
                <div>
                    <label htmlFor="loginEmailInput">
                        Email :
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}

                        className="email"
                        required
                        placeholder="email@host.com"
                        id="loginEmailInput"
                    />
                </div>

                <div>
                    <label htmlFor="loginPasswordInput">
                        Password :
                    </label>
                    <input
                        type={isPasswordVisible ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}

                        className="password"
                        required
                        id="loginPasswordInput"
                    />
                    <br />
                    <input
                        type="checkbox"
                        checked={isPasswordVisible}
                        onChange={(e) => {
                            setisPasswordVisible(e.target.checked);
                        }}

                        className="password-visible"
                        id="loginPasswordVisibleInput"
                    />
                    <label
                        className="show-password"
                        htmlFor="loginPasswordVisibleInput">
                        Show&nbsp;Password
                    </label>
                </div>


                <div className={"login-failed " + (wasLoginFailed && 'visible')} >
                    Your email or password was incorrect
                </div>

                <button
                    disabled={!formData.email || !formData.password}
                    type="submit"
                >
                    Login
                </button>
            </form>

            <div>
                <span>New here? </span>
                <Link to="/signup">
                    Create an account.
                </Link>
            </div>
        </div>
    )
}