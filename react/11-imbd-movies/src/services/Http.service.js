const axios = require("axios");
const URL = 'https://imdb-api.com/en/API';
const API_KEY = 'k_veco7d16';

function getMovieByExpression(expression) {
    return axios.get(`${URL}/SearchTitle/${API_KEY}/${expression}`);
}

function getMoviesBySearch(query) {
    return axios.get(`${URL}/SearchMovie/${API_KEY}/${query}`);
}

function customSearch(queryParams) {
    // title_type: feature - genre: action
    let query = buildQuery(queryParams);
    return axios.get(`${URL}/AdvancedSearch/${API_KEY}/${query}`);
}

function buildQuery(queryParams) {
    var query = `?`
    // build the query
    for (let [key, value] of Object.entries(queryParams)) {
        query += `${key}=${value}&`
    }
    query = query.slice(0, -1);
    return query;
}

const http = {
    getMovieByExpression,
    getMoviesBySearch,
    customSearch
}

function useHttp() {
    return http
}

export { useHttp }