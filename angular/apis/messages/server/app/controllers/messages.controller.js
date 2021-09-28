const db = require('../index');

exports.welcome = (req, res) => {
    res.send("this reuest is not implemented. please complete it")
}

exports.postMessage = (req, res) => {

    const message = req.body.message;
    const userId = req.body.userId;

    const query = "INSERT INTO simple_chat.messages \
                    (message, userId) \
                    VALUES (?, ?);"

    db.query(query, [message, userId], (err, results) => {
        if (err) {
            res.status(500).send({
                message: "Error retrieving data",
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

exports.getAllMessages = (req, res) => {
    const query = "SELECT * FROM simple_chat.messages;"

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

exports.getMessageById = (req, res) => {

    const id = req.params.id;

    const query = "SELECT * FROM simple_chat.messages \
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

exports.getMessagesByUserId = (req, res) => {

    const userId = req.params.userId;

    const query = "SELECT * \
                    FROM simple_chat.messages \
                    INNER JOIN users \
                        ON messages.userId = users.id \
                    WHERE users.id = ?;"

    db.query(query, [userId], (err, results) => {
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

exports.updateMessage = (req, res) => {

    const id = req.body.id;
    const message = req.body.message;

    const query = "UPDATE simple_chat.messages \
                    SET message = ? \
                    WHERE id = ?;"

    db.query(query, [message, id], (err, results) => {
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

exports.deleteMessageById = (req, res) => {

    const id = req.params.id;

    const query = "DELETE FROM simple_chat.messages \
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

exports.deleteMessagesByUserId = (req, res) => {

    const userId = req.params.userId;

    const query = "DELETE FROM simple_chat.messages \
                    WHERE userId = ?;"

    db.query(query, [userId], (err, results) => {
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