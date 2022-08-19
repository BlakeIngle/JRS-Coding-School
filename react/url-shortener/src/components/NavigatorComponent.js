import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useApi } from '../services/api.service';
import './Navigator.css'

export default function NavigatorComponent() {

    const { id } = useParams();
    const api = useApi();

    function doNavigate() {
        console.log("loading url")
        api.getUrlById(id)
            .then((results) => {
                // the results are in!
                console.log(results)
                const destination = results.data?.url;
                if (destination) {
                    setTimeout(() => {
                        window.location.href = destination;

                    }, 700);
                }
            })
            .catch(err => {
                console.error(err)
            })
            .finally(() => {
                console.log("request finished")
            })
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
