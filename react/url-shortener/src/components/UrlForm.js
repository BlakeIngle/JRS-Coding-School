import React, { useEffect, useRef, useState } from 'react'
import { useApi } from '../services/api.service';
import './UrlForm.css';
import { useLocalStorage } from '../services/localStorage.service';

export default function UrlForm() {

    const [formData, setFormData] = useState({
        id: generateRandomID(),
        url: ''
    });
    const [isInvalid, setIsInvalid] = useState(false);
    const [didUserSubmit, setDidUserSubmit] = useState(false);
    const ls = useLocalStorage();
    const user = ls.getUser();

    var timeoutRef = useRef(null);

    const api = useApi();

    function generateRandomID() {
        let id = ''
        for (let i = 0; i < 6; i++) {
            id += Math.floor(Math.random() * 10);
        }
        return id;
    }

    function onInputChanged(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function onFormSubmit(e) {
        e.preventDefault();

        if (!didUserSubmit) {
            setDidUserSubmit(true);
        }

        // post to DB
        api.createUrl(formData.id, formData.url, user.id)
            .then((results) => {
                console.log(results.data.message);
                alert(results.data.message);
            }).catch((err) => {

                console.log("failed request")
                let errno = err?.response?.data?.error?.errno
                if (errno == 1062) {
                    setIsInvalid(true);
                }
            }).finally(() => {
                console.log("request done")
            })
    }

    function checkIfIdIsTaken() {
        if (formData.id == '') {
            return;
        }

        api.getUrlById(formData.id)
            .then((d) => {
                setIsInvalid(true);
            })
            .catch((err) => {
                let statusCode = err.response.status;
                if (statusCode == 404) {
                    setIsInvalid(false);
                }
            });
    }

    useEffect(() => {

        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            checkIfIdIsTaken();
        }, 500);

    }, [formData.id]);

    return (
        <form onSubmit={onFormSubmit}
            className="url-form-root">

            <div className="input-container">

                <label className={`${(didUserSubmit && formData.url == '') ? 'required' : ''}`}>
                    Your Url:
                </label>
                <input type="text"
                    name="url"
                    value={formData.url}
                    onChange={onInputChanged}

                    placeholder="http://www.yoururl"
                    required
                    id="urlInput" />
            </div>

            <div className={`input-container id ${isInvalid ? 'invalid' : ''}`}>
                <label htmlFor="idInput">
                    Id:
                </label>
                <input type="text"
                    name="id"
                    value={formData.id}
                    onChange={onInputChanged}

                    required
                    id="idInput"
                />
            </div>

            <p className={`error-message ${isInvalid ? 'invalid' : ''}`}>
                Id is unavailable
            </p>

            <p>Your short Url:</p>
            <p>http://localhost:3000/{formData.id}</p>

            <button type="submit"
                disabled={!formData.id || !formData.url}
            >
                Generate Short Url
            </button>
        </form>
    )
}
