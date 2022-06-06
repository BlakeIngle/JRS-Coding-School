import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useApi } from '../services/api.service';
import { useLocalStorage } from '../services/localStorage.service'

export default function UserPage() {

    const ls = useLocalStorage();
    const user = ls.getUser();
    const { userId } = useParams();
    const navigate = useNavigate();
    const http = useApi(); // YOUR custom hook for http requests

    const [allUrls, setAllUrls] = useState([]);

    function loadUrls() {
        // get all urls
        http.getAllUrls()
            .then(results => {
                // save the results as 'allUrls'
                console.log(results);
                setAllUrls(results.data.urls);
            })
            .catch();
    }

    useEffect(() => {
        if (user?.id == userId) {
            // logged in and viewing their own page
            loadUrls()
        } else {
            // not loggin in or trying to look at 
            // another users page
            // navigate('/');
        }
    }, []);

    return (
        <div>
            {allUrls.map(url => (
                <div>
                    <span>localhost:8080/{url.id}</span>

                    <Link to={url.url}>
                        {url.url}
                    </Link>
                </div>
            ))}
        </div>
    )
}
