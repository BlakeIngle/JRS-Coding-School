import React, { useState } from 'react'
import { useApi } from '../services/api.service';

export default function UrlSearch() {

    const [searchInput, setSearchInput] = useState('');
    const [urls, setUrls] = useState([]);
    const [debounceTimer, setDebounceTimer] = useState(null);
    const http = useApi();

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);

        clearTimeout(debounceTimer);

        setDebounceTimer(
            setTimeout(() => {
                http.searchUrls(e.target.value)
                    .then(response => {
                        console.count("got urls");
                        setUrls(response.data);
                    });
            }, 300)
        )
    }

    return (
        <div>
            <input type="text"
                value={searchInput}
                onChange={handleInputChange}
            />

            {urls.map((url, i) => <div key={i}>{url.url}</div>)}

        </div>
    )
}
