const db = require('../index');

exports.getAllBooks = (req, res) => {
    // 'parse' (pick apart) the request for any data
    // create an SQL script for the database (as a string)
    const query = `SELECT * FROM books.books;`;
    // tell the database to execute that script
    db.query(query, (err, results) => {
        // this code will execute when the DB responds
        // return the appropriate response to the client

        // 3 possible cases
        // 1 - success
        // 2 - nothing found
        // 3 - whole error

        if (err) {
            // case #3
            res.status(500)
                .send({
                    message: "There was an error getting books.",
                    error: err
                });
        } else if (results.length == 0) {
            // case #2
            res.status(404)
                .send({
                    message: "No books found :("
                })
        } else {
            // case #1
            res.send({
                books: results
            });
        }
    });
}

exports.createNewBook = (req, res) => {
    res.send('Method not implemented');
}

exports.updateBook = (req, res) => {
    res.send('Method not implemented');
}

exports.deleteBookById = (req, res) => {
    res.send('Method not implemented');
}
