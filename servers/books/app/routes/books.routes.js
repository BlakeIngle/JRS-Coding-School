module.exports = (app) => {

    const books = require('../controllers/books.controller');

    app.get('/api/books', books.getAllBooks); //            ✅
    app.post('/api/books', books.createNewBook); //         ❌
    app.put('/api/books', books.updateBook); //             ❌
    app.delete('/api/books/:id', books.deleteBookById); //  ❌
}