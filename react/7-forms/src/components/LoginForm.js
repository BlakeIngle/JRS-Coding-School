import React, { useState } from 'react';
import './LoginForm.css';

export default function LoginForm() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    function onInputChanged(e) {
        let value = e.target.value
        let name = e.target.name

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function attemptLogIn(e) {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <form className="login-form"
            onSubmit={attemptLogIn}
        >
            <h3>Log In</h3>

            <div>
                <label htmlFor="username">
                    Username :
                </label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={onInputChanged}

                    placeholder="username"
                    id="username"
                    required
                />
            </div>

            <div>
                <label htmlFor="password">
                    Password :
                </label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={onInputChanged}

                    placeholder="password"
                    id="password"
                    required
                />
            </div>

            <button
                type="submit"
                disabled={!formData.username || !formData.password}
            >
                Log In
            </button>
        </form>
    );
}
