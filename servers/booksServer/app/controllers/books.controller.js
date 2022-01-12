const db = require('../index');

exports.getAllBooks = (req, res) => {
    // contact sql, get all (*) -> send data back to client
    const query = "SELECT * FROM books;";

    db.query(query, (err, results) => {
        if (err) {
            res.status(500)
                .send({ error: err, message: "Error retrieving books." })
        } else {
            if (results.length == 0) {
                res.status(404)
                    .send({ message: "No books found." });
            } else {
                res.send({ books: results });
            }
        }
    });
}

exports.getBookById = (req, res) => {

    const { id } = req.params;

    const query = `SELECT * FROM books WHERE id = ?;`;
    const placeholders = [id];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({ error: err, message: "Error retrieving book." })
        } else {
            if (results.length == 0) {
                res.status(404)
                    .send({ message: "No book found." });
            } else {
                res.send({ book: results });
            }
        }
    });
}

exports.getBooksByAuthor = (req, res) => {

    const { author } = req.params;

    const query = `SELECT * FROM books WHERE author LIKE ?;`;
    const placeholders = [`%${author}%`];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({ error: err, message: "Error retrieving books." })
        } else {
            if (results.length == 0) {
                res.status(404)
                    .send({ message: "No books found." });
            } else {
                res.send({ books: results });
            }
        }
    });
}

exports.getBooksByTitle = (req, res) => {

    const { title } = req.params;

    const query = `SELECT * FROM books WHERE title LIKE ?;`;
    const placeholders = [`%${title}%`];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({ error: err, message: "Error retrieving books." })
        } else {
            if (results.length == 0) {
                res.status(404)
                    .send({ message: "No books found." });
            } else {
                res.send({ books: results });
            }
        }
    });
}

exports.getBooksByQuery = (req, res) => {

    console.log("recieved request")

    var query = `SELECT * FROM books 
                    WHERE `;

    var isAndAdded = false;
    var placeholders = [];

    for (let prop in req.query) {

        if (isAndAdded) {
            query += 'AND '
        }
        isAndAdded = true;
        query += `${prop} LIKE ? `
        placeholders.push(`%${req.query[prop]}%`);
    }
    query += ';';

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({ error: err, message: "Error retrieving books." })
        } else {
            if (results.length == 0) {
                res.status(404)
                    .send({ message: "No books found." });
            } else {
                res.send({ books: results });
            }
        }
    });
}

exports.addNewBook = (req, res) => {

    const pairs = Object.entries(req.body);

    var columns = ''; // `id, title, author`
    var values = ''; // `123, 'The Cat In The Hat', 'Dr. Seuss'`
    const placeholders = [];

    for (let i = 0; i < pairs.length; i++) {
        let [key, value] = pairs[i];
        columns += (i != 0 ? ', ' : '') + '??'
        placeholders.push(key);
    }

    for (let i = 0; i < pairs.length; i++) {
        let [key, value] = pairs[i];
        values += (i != 0 ? ', ' : '') + '?'
        placeholders.push(value);
    }

    const query = `INSERT INTO books (${columns})
                    values (${values});`;

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({ error: err, message: "Error posting book." })
        } else {
            res.send({
                message: "Book posted successfully.",
                results: results
            });
        }
    });
}

exports.updateBook = (req, res) => {

    var { title, author, publisher, year, cover, id } = req.body;

    // send the correct SQL script to the DB
    var query = `UPDATE books 
                    SET 
                        title = ? ,
                        author = ? ,
                        publisher = ? ,
                        year = ? ,
                        cover = ?
                    WHERE id = ? ;`

    var placeholders = [title, author, publisher, year, cover, id];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({ error: err, message: "Error updating book." })
        } else {
            res.send({
                message: "Book updated successfully.",
                results: results
            });
        }
    });
}

exports.deleteBookById = (req, res) => {

    var { id } = req.params;

    var query = `DELETE FROM books
	                WHERE id = ? ;`

    var placeholders = [id];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({ error: err, message: "Error deleting book." })
        } else {
            res.send({
                message: "Book deleted successfully.",
                results: results
            });
        }
    });
}