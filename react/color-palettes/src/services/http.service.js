const axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

function addPalette(title, colors) {
    return api.post(`/api/palettes`, { title, colors });
}

const http = {
    addPalette
}

function useHttp() {
    return http;
}

export { useHttp };