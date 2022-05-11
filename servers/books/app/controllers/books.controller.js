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

exports.getBooksByQuery = (req, res) => {

    console.log(req.query);

    var filters = ``;
    var placeholders = [];

    let entries = Object.entries(req.query);
    for (let [key, value] of entries) {
        filters += ` ?? LIKE ? AND`;
        placeholders.push(key, `%${value}%`);
    }
    filters = filters.slice(0, -3);

    const query = `
        SELECT * FROM books.books
            WHERE 
                ${filters}
            ;`;

    console.log(query, placeholders);

    db.query(query, placeholders, (err, results) => {
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

exports.getUsersReadingList = (req, res) => {

    let userId = req.params.userId;

    const query = `
        SELECT bookId as id, author, title, coverImage
            FROM list_items
            INNER JOIN books
                ON list_items.bookId = books.id
            WHERE userId = ?;
    `;
    const placeholders = [userId];

    db.query(query, placeholders, (err, results) => {

        if (err) {
            res.status(500)
                .send({
                    message: "There was an error getting books.",
                    error: err
                });
        } else if (results.length == 0) {
            res.status(404)
                .send({
                    message: "No books found :("
                })
        } else {
            res.send({
                books: results
            });
        }
    });
}

exports.createNewBook = (req, res) => {

    console.log(req.body);

    let { title, author, coverImage } = req.body;
    // if the title author or coverimage was not defined -> error
    if (!title || !author || !coverImage) {
        res.status(400)
            .send({
                message: "Could not create book. You must provide a 'title', 'author', and 'coverImage'."
            });
        return;
    }

    const query = `
            INSERT INTO books.books (title, author, coverImage) 
            VALUES 
                (?, ?, ?);
    `;
    const placeholders = [title, author, coverImage];

    // tell the database to execute that script
    db.query(query, placeholders, (err, results) => {

        if (err) {
            // case #3
            res.status(500)
                .send({
                    message: "There was an error creating a new book.",
                    error: err
                });
        } else {
            // case #1
            res.send({
                message: 'Your book was created successfully.'
            });
        }
    });

}

exports.updateBook = (req, res) => {

    let { id, title, author, coverImage } = req.body;
    // if the title author or coverimage was not defined -> error
    if (!id || !title || !author || !coverImage) {
        res.status(400)
            .send({
                message: "Could not create book. You must provide an 'id', 'title', 'author', and 'coverImage'."
            });
        return;
    }

    id = Number(id);

    const query = `
        UPDATE books.books 
        SET 
            title = ?, 
            author = ?, 
            coverImage = ? 
        WHERE (id = ?);
    `;
    const placeholders = [title, author, coverImage, id];

    // tell the database to execute that script
    db.query(query, placeholders, (err, results) => {

        if (err) {
            // case #3
            res.status(500)
                .send({
                    message: "There was an error updating your book.",
                    error: err
                });
        } else {
            // case #1
            res.send({
                message: 'Your book was updated successfully.'
            });
        }
    });

}

exports.deleteBookById = (req, res) => {

    let { id } = req.params;

    const query = `
        DELETE FROM books.books 
            WHERE (id = ?);
    `;
    const placeholders = [id];

    // tell the database to execute that script
    db.query(query, placeholders, (err, results) => {

        if (err) {
            // case #3
            res.status(500)
                .send({
                    message: "There was an error deleting your book.",
                    error: err
                });
        } else if (results.affectedRows === 0) {
            // case #2
            res.status(404)
                .send({
                    message: "No books deleted :("
                })
        } else {

            console.log(results)
            // case #1
            res.send({
                message: 'Your book was deleted successfully.'
            });
        }
    });

}
