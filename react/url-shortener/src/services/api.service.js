const axios = require('axios');
const URL = 'http://localhost:8080/api';

function createUrl(id, url) {
    const body = { id, url }
    return axios.post(`${URL}/urls`, body);
}

function getAllUrls() {
    return axios.get(`${URL}/urls`);
}

function getUrlById(id) {
    return axios.get(`${URL}/urls/${id}`);
}

function login({ email, password }) {
    let body = { email, password }
    return axios.post(`${URL}/users/login`, body);
}

const api = {
    getUrlById,
    createUrl,
    login,
    getAllUrls
};

function useApi() {
    return api;
}

export { useApi };