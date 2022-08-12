import axios from 'axios'
const BASE_URL = 'http://localhost:8080/api'

function getAllHeroes() {
    return axios.get(`${BASE_URL}/heroes`);
}

function getHeroById(heroId) {
    return axios.get(`${BASE_URL}/heroes/${heroId}`);
}

function createNewHero({ name, realName, powers, nemesis }) {
    return axios.post(`${BASE_URL}/heroes`,
        { name, realName, powers, nemesis }
    );
}

function editHero(heroId, { name, realName, powers, nemesis }) {
    return axios.put(`${BASE_URL}/heroes/${heroId}`,
        { name, realName, powers, nemesis }
    );
}

function deleteHeroById(heroId) {
    return axios.delete(`${BASE_URL}/heroes/${heroId}`);
}


function useApi() {
    return {
        getAllHeroes,
        getHeroById,
        createNewHero,
        editHero,
        deleteHeroById,
    }
}

export { useApi };