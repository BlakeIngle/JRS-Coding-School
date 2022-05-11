module.exports = (app) => {

    const books = require('../controllers/books.controller');

    app.get('/api/books', books.getAllBooks); //            ✅

    app.get('/api/books/search', books.getBooksByQuery); //            ✅
    // app.get('/api/books/:bookId');
    app.get('/api/users/:userId/favorites', books.getUsersReadingList);

    app.post('/api/books', books.createNewBook); //         ✅
    app.put('/api/books', books.updateBook); //             ✅
    app.delete('/api/books/:id', books.deleteBookById); //  ✅
}