const axios = require('axios');
const URL = 'http://localhost:8080/api';

function createUrl(id, url, userId) {
    const body = { id, url, userId }
    return axios.post(`${URL}/urls`, body);
}

function getAllUrls() {
    return axios.get(`${URL}/urls`);
}

function getUrlById(id) {
    return axios.get(`${URL}/urls/${id}`);
}

function searchUrls(subStr) {
    return axios.get(`${URL}/urls/search/${subStr}`);
}

function deleteUrl(id) {
    return axios.delete(`${URL}/urls/${id}`);
}

function login({ email, password }) {
    let body = { email, password }
    return axios.post(`${URL}/users/login`, body);
}

function createAccount({ email, password }) {
    return axios.post(`${URL}/users`, { email, password });
}

const api = {
    getUrlById,
    createUrl,
    deleteUrl,
    login,
    getAllUrls,
    createAccount,
    searchUrls
};

function useApi() {
    return api;
}

export { useApi };