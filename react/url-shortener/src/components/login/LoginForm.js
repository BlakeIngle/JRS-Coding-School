import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useApi } from '../../services/api.service';
import { useLocalStorage } from '../../services/localStorage.service';
import './LoginForm.css';

export default function LoginForm() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isLoginFailed, setIsLoginFailed] = useState(false);

    const api = useApi();
    const localStorageService = useLocalStorage();
    const navigate = useNavigate();

    function onInputChanged(e) {
        let value = e.target.value
        let name = e.target.name

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function attemptLogIn() {
        console.log("logging in")

        api.login(formData)
            .then(results => {
                //  success!!!
                // 'save' the user into local storage
                let user = results.data.user;
                localStorageService.saveUser(user);
                //  nav to home page
                navigate('/');
            }).catch(err => {
                console.error(err)
                setIsLoginFailed(true);
            }).finally(() => {
                console.log("done loading")
                setIsLoading(false);
            })

    }

    function handleFormSubmit(e) {
        e.preventDefault();

        setIsLoading(true);

        setTimeout(() => {
            attemptLogIn();
        }, 1000);
    }

    return (
        <form className="login-form"
            onSubmit={handleFormSubmit}
        >
            <h3>Log In</h3>

            <div>
                <label htmlFor="email">
                    Email :
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onInputChanged}

                    placeholder="email@domain.com"
                    id="email"
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
                disabled={!formData.email || !formData.password}
            >
                {!isLoading
                    ? 'Log In'
                    : <div className="loader" />}
            </button>

            {isLoginFailed && (
                <div className="failed">
                    Username or password was incorrect
                </div>
            )}
        </form>
    );
}
