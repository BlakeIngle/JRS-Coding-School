import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useApi } from '../services/api.service';
import './Navigator.css'

export default function NavigatorComponent() {

    const { id } = useParams();
    const api = useApi();

    function doNavigate() {
        api.getUrlById(id)
            .then((results) => {
                // the results are in!
                const destination = results.data?.url?.url;
                if (destination) {
                    setTimeout(() => {
                        window.location.href = destination;

                    }, 1000);
                }
            });
    }

    useEffect(() => {
        doNavigate();
    }, []);

    return (
        <div className="navigator-root">
            <div className="loader"></div>
        </div>
    )
}
