import axios from 'axios'
const BASE_URL = 'http://localhost:8080/api'

function getAllHeroes() {
    return axios.get(`${BASE_URL}/heroes`);
}

function getHeroById(heroId) {
    return axios.get(`${BASE_URL}/heroes/${heroId}`)
}

function useApi() {
    return {
        getAllHeroes
    }
}

export { useApi };