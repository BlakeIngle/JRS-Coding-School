const axios = require('axios');
const URL = `http://localhost:8080/api`

exports.getAllBooks = () => {
    return axios.get(`${URL}/books`);
}

exports.getBookById = (bookId) => {
    return axios.get(`${URL}/books/${bookId}`);
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

const updateUser = (user) => {
    return axios.put(`${URL}/users/${user.id}`, user);
}

exports.setFavoriteBook = (bookId, userId) => {
    return updateUser({ id: userId, favoriteBook: bookId });
}