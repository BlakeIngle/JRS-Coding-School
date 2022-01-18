module.exports = (app) => {
    const books = require('../controllers/books.controller');

    app.get('/api/books', books.getAllBooks);

    app.get('/api/books/search', books.getBooksByQuery);
    app.get('/api/books/:id', books.getBookById);
    app.get('/api/books/:bookId/lists', books.getAllListsBookIsInByBookId);
    app.get('/api/books/author/:author', books.getBooksByAuthor);
    app.get('/api/books/title/:title', books.getBooksByTitle);
    app.get('/api/books/list/:listId', books.getBooksByListId);


    app.post('/api/books', books.addNewBook);

    app.put('/api/books', books.updateBook);

    app.delete('/api/books/:id', books.deleteBookById);
}