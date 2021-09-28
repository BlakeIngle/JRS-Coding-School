const db = require('../index');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.welcome = (req, res) => {
    res.send("this reuest is not implemented. please complete it")
}

exports.postUser = async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const encryptedPassword = await bcrypt.hash(password, saltRounds);
    console.log(encryptedPassword);
    const query = "INSERT INTO simple_chat.users (username, password) \
                    VALUES (?, ?);"

    db.query(query, [username, encryptedPassword], (err, results) => {
        if (err) {
            res.status(500).send({
                message: "Error creating user",
                error: err
            });
        } else {
            res.send({
                message: "Data posted successfully.",
                results: results
            });
        }
    });
}

exports.loginUser = (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const query = "SELECT * FROM simple_chat.users \
                    WHERE username = ?;"

    db.query(query, [username], async (err, results) => {
        if (err) {
            res.status(500).send({
                message: "Error retrieving data",
                error: err
            });
        } else {
            if (results.length == 0) {
                res.status(401).send({
                    message: "Username not found.",
                    error: err
                });
            } else {
                // username found
                console.log("data:", results)
                const comparison = await bcrypt.compare(password, results[0].password);

                if (comparison) {
                    // login successfull
                    res.send(results[0]);
                } else {
                    res.status(401).send({ message: "Incorrect Password", error: err });
                }
            }
        }
    });
}

exports.getAllUsers = (req, res) => {
    const query = "SELECT * FROM simple_chat.users;"

    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send({
                message: "Error retrieving data",
                error: err
            });
        } else {
            if (results.length == 0) {
                res.status(404).send({
                    message: "No data found.",
                    error: err
                });
            } else {
                // data found
                res.send(results);
            }
        }
    });
}

exports.getUserById = (req, res) => {

    const id = req.params.id;

    const query = "SELECT * FROM simple_chat.users \
                    WHERE id = ?;"

    db.query(query, [id], (err, results) => {
        if (err) {
            res.status(500).send({
                message: "Error retrieving data",
                error: err
            });
        } else {
            if (results.length == 0) {
                res.status(404).send({
                    message: "No data found.",
                    error: err
                });
            } else {
                // data found
                res.send(results);
            }
        }
    });
}

exports.getUserByUsername = (req, res) => {

    const username = req.params.username;

    const query = "SELECT * FROM simple_chat.users \
                    WHERE username = ?;"

    db.query(query, [username], (err, results) => {
        if (err) {
            res.status(500).send({
                message: "Error retrieving data",
                error: err
            });
        } else {
            if (results.length == 0) {
                res.status(404).send({
                    message: "Username not found.",
                    error: err
                });
            } else {
                // data found
                res.send(results);
            }
        }
    });
}

exports.updateUser = (req, res) => {

    const id = req.body.id;
    const password = req.body.password;

    const query = "UPDATE simple_chat.users \
                    SET password = ? \
                    WHERE id = ?;"

    db.query(query, [password, id], (err, results) => {
        if (err) {
            res.status(500).send({
                message: "Error updating data",
                error: err
            });
        } else {
            // TODO: check if data was updated
            // something like: results.count > 0
            res.send({
                message: "Data updated successfully.",
                results: results
            });
        }
    });
}

exports.deleteUser = (req, res) => {

    const id = req.params.id;

    const query = "DELETE FROM simple_chat.users \
                    WHERE id = ?;"

    db.query(query, [id], (err, results) => {
        if (err) {
            res.status(500).send({
                message: "Error deleting data",
                error: err
            });
        } else {
            // TODO: check if data was deleted
            // something like: results.count > 0
            res.send({
                message: "Data deleted successfully.",
                results: results
            });
        }
    });
}