const db = require('../index');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.getUserById = (req, res) => {
    res.send('Method not implemented');
}

exports.login = (req, res) => {

    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400)
            .send({
                message: 'Could not login. Username or password was missing.'
            });
        return;
    }

    const query = `
        SELECT * FROM books.users 
            WHERE username = ?;
    `;
    const placeholders = [username];

    db.query(query, placeholders, async (err, results) => {

        if (err) {
            // case #3
            res.status(500)
                .send({
                    message: "There was an error logging in. Please try again.",
                    error: err
                });
        } else if (results.length == 0) {
            // case #2
            res.status(404)
                .send({
                    message: "Username or Password was incorrect."
                })
        } else {

            let encryptedPassword = results[0].password;
            const passwordMatched = await bcrypt.compare(password, encryptedPassword);

            if (passwordMatched) {
                // successful login

                let user = results[0];

                const token = jwt.sign(
                    {
                        userId: user.id,
                        username: user.username
                    },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: '2h'
                    }
                );
                user.token = token;

                res.send({
                    message: "You have successfully logged in.",
                    user
                });
            } else {
                res.status(404)
                    .send({
                        message: 'Username or password was incorrect'
                    });
            }
        }
    });

}

exports.createNewUser = async (req, res) => {

    let { username, password } = req.body;

    if (!username || !password) {
        // client error
        res.status(400)
            .send({
                message: "Username or password was not defined."
            });
        return;
    }

    const encryptedPassword = await bcrypt.hash(password, saltRounds);

    const query = `
        INSERT INTO books.users (username, password)
            VALUES (?, ?);
    `;
    const placeholders = [username, encryptedPassword];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            if (err.errno === 1062) {
                res.status(400)
                    .send({
                        error: err,
                        message: 'That username already exists.'
                    });
            } else {
                res.status(500)
                    .send({
                        error: err,
                        message: 'There was an error creating a new user.'
                    });
            }

        } else {
            res.send({
                message: "your account was created :) !!!"
            });
        }
    });
}

exports.addBookToUsersReadingList = (req, res) => {

    let { userId, bookId } = req.body;

    if (!userId || !bookId) {
        // client error
        res.status(400)
            .send({
                message: "userId and bookId must be defined."
            });
        return;
    }

    const query = `
        INSERT INTO list_items (userId, bookId)
            VALUES (?, ?);
    `;
    const placeholders = [userId, bookId];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({
                    error: err,
                    message: 'There was an error adding a book to the reading list.'
                });
        } else {
            res.send({
                message: "The book was added to the reading list!"
            });
        }
    });
}

exports.updateFavoriteBookById = async (req, res) => {

    let bookId = req.params.favoriteBookId;
    let userId = req.body.id;

    if (!bookId || !userId) {
        // client error
        res.status(400)
            .send({
                message: "BookId or UserId was not defined."
            });
        return;
    }

    const query = `
        UPDATE books.users 
        SET 
            favoriteBook = ?
        WHERE (id = ?);
    `;
    const placeholders = [bookId, userId];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({
                    error: err,
                    message: 'There was an error updating the user.'
                });
        } else {
            res.send({
                message: "The user was updated successfully!"
            });
        }
    });
}

exports.deleteUserById = (req, res) => {

    let { id } = req.params;

    const query = `
        DELETE FROM books.users 
            WHERE (id = ?);
    `;
    const placeholders = [id];

    // tell the database to execute that script
    db.query(query, placeholders, (err, results) => {

        if (err) {
            res.status(500)
                .send({
                    message: "There was an error deleting your account.",
                    error: err
                });
        } else if (results.affectedRows === 0) {
            res.status(404)
                .send({
                    message: "That account could not be deleted :("
                })
        } else {
            res.send({
                message: 'Your account was deleted successfully.'
            });
        }
    });

}
