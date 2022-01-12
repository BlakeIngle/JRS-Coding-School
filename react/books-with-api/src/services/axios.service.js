const axios = require('axios');
const URL = `http://localhost:8080/api`

exports.getAllBooks = () => {
    return axios.get(`${URL}/books`);
}

exports.createNewBook = (book) => {
    return axios.post(`${URL}/books`, book);
}

exports.login = (user) => {
    return axios.post(`${URL}/users/login`, user);
}

exports.createNewUser = (user) => {
    return axios.post(`${URL}/users`, user);
}

exports.getUserByEmail = (email) => {
    return this.login({ email, password: '' });
}