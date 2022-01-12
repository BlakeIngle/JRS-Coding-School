const db = require('../index');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.getUserById = (req, res) => {

    const { id } = req.params;
    console.log("getting userId: ", id)

    const query = `SELECT users.id, users.email, users.password, 
                        users.name, books.id as 'bookId', books.title, 
                        books.author, books.publisher, books.year, 
                        books.cover  
                    FROM users
                        LEFT JOIN books
                            ON users.favoriteBook = books.id
                    WHERE users.id = ? ;`;

    const placeholders = [id];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({ error: err, message: "Error retrieving user." })
        } else {
            if (results.length == 0) {
                res.status(404)
                    .send({ message: "No user found." });
            } else {
                var user = results[0];
                user = rebuildUser(user);

                res.send({ user });
            }
        }
    });
}

const rebuildUser = (user) => {
    user = {
        ...user,
        favoriteBook: {
            id: user.bookId,
            title: user.title,
            author: user.author,
            publisher: user.publisher,
            year: user.year,
            cover: user.cover
        }
    }

    delete user.bookId;
    delete user.title;
    delete user.author;
    delete user.publisher;
    delete user.year;
    delete user.cover;

    return user;
}

const getUserByEmail = (email, res) => {

    const query = `SELECT users.id, users.email, users.password, 
                        users.name, books.id as 'bookId', books.title, 
                        books.author, books.publisher, books.year, 
                        books.cover  
                    FROM users
                        LEFT JOIN books
                            ON users.favoriteBook = books.id
                    WHERE users.email = ? ;`;

    const placeholders = [email];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({ error: err, message: "Error retrieving user." })
        } else {
            if (results.length == 0) {
                res.status(404)
                    .send({ message: "No user found." });
            } else {
                var user = results[0];
                user = rebuildUser(user);
                console.log("sending new user back")
                res.send({
                    user,
                    message: "User added successfully." // upon creation
                });
            }
        }
    });
}

exports.addNewUser = async (req, res) => {

    const { email, password, name } = req.body;
    if (!email || !password) {
        res.status(404)
            .send({ message: "invalid input" })
    };

    const query = `INSERT INTO users (email, password, name)
                    VALUES (?, ?, ?);`;

    const encryptedPassword = await bcrypt.hash(password, saltRounds);

    const placeholders = [email, encryptedPassword, name];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({ error: err, message: "Error adding new user." })
        } else {
            console.log('user created, getting row');
            getUserByEmail(email, res);
        }
    });
}

exports.login = (req, res) => {
    console.log("loggin in")
    const { email, password } = req.body;

    const query = `SELECT * FROM users 
                    WHERE email = ?;`;

    const placeholders = [email];

    db.query(query, placeholders, async (err, results) => {
        if (err) {
            res.status(500).send({
                error: err,
                message: "Error loging in."
            })
        } else {
            if (results.length == 0) {
                res.status(404).send({
                    message: "Email or Password was incorrect."
                });
                return;
            } else {
                // logic
                const passwordMatched = await bcrypt.compare(password, results[0].password);

                if (passwordMatched) {
                    // password correct
                    res.send({ user: results[0] });
                } else {
                    // password incorrect
                    res.status(401).send({
                        message: "Email or Password was incorrect."
                    });
                }
            }
        }
    });
}

exports.updateUserById = (req, res) => {

    const { id } = req.params;
    const { name } = req.body;

    var query = `UPDATE users 
                    SET 
                        name = ?
                    WHERE id = ? ;`

    const placeholders = [name, id];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({ error: err, message: "Error updating user." })
        } else {
            res.send({
                results,
                message: "User updated successfully."
            });
        }
    });
}

exports.deleteUserById = (req, res) => {

    const { id } = req.params;

    const query = `DELETE FROM users 
                    WHERE id = ? ;`;

    const placeholders = [id];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({ error: err, message: "Error deleting user." })
        } else {
            if (results.affectedRows == 0) {
                res.status(404)
                    .send({
                        message: "Cannot delete user. No user found.",
                        results
                    });
            } else {
                res.send({
                    results,
                    message: "User deleted successfully."
                });
            }
        }
    });
}