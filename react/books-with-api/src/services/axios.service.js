const axios = require('axios');
const URL = `http://localhost:8080/api`

function getAllBooks() {
    return axios.get(`${URL}/books`);
}

function getUsersReadingList(userId) {
    return axios.get(`${URL}/users/${userId}/favorites`);
}

function createNewBook(book) {
    return axios.post(`${URL}/books`, book);
}

function updateBook(updatedBook) {
    return axios.put(`${URL}/books`, updatedBook);
}

function deleteBook(bookId) {
    return axios.delete(`${URL}/books/${bookId}`);
}

/**
 * Attempt to login to the books application
 * @param {string} username 
 * @param {string} password 
 * @returns an HTTP promise
 */
function login(username, password) {
    return axios.post(`${URL}/users/login`, { username, password });
}

/**
 * Sends a POST request to the books API
 * to create a new user
 * @param {{username: string, password: string}} user 
 * @returns 
 */
function createNewUser(user) {
    return axios.post(`${URL}/users`, user);
}

// userId is a string
function setFavoriteBook(bookId, userId) {
    return axios.put(`${URL}/users/favorite/${bookId}`, { id: userId });
}

function addBookToReadingList(book, user) {
    return axios.post(`${URL}/users/list`, { bookId: book.id, userId: user.id })
}

// user Id is a string
function deleteAccount(userId) {
    return axios.delete(`${URL}/users/${userId}`);
}

const api = {
    getAllBooks,
    getUsersReadingList,
    createNewBook,
    updateBook,
    deleteBook,
    login,
    createNewUser,
    setFavoriteBook,
    addBookToReadingList,
    deleteAccount
}

function useAxios() {
    return api;
}

export { useAxios };