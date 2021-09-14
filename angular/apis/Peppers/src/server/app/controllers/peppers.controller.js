const db = require('../index');

exports.welcome = (req, res) => {
    res.send("Welcome to the peppers API!\nIf you can't handle the heat, stay out of the kitchen.")
};

exports.getAllPeppers = (req, res) => {

    var query = "SELECT * FROM peppers.pepper;";

    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send({
                error: err,
                message: "Error retrieving peppers."
            });
        } else {
            if (results.length == 0) {
                // no data found
                res.status(404).send({
                    message: "No peppers found."
                })
            } else {
                res.send(results);
            }
        }
    });
}

exports.getPeppersByColor = (req, res) => {

    var color = req.params.color;

    var query = "SELECT * FROM peppers.pepper \
        WHERE color = ?;";
    var placeholderValues = [color]

    db.query(query, placeholderValues, (err, results) => {
        if (err) {
            res.status(500).send({
                error: err,
                message: "Error retrieving peppers by color."
            });
        } else {
            if (results.length == 0) {
                // no data found
                res.status(404).send({
                    message: "No peppers found with color: '" + color + "'"
                })
            } else {
                res.send(results);
            }
        }
    });
}

exports.getPeppersByName = (req, res) => {

    var name = '%' + req.params.name + '%';

    var query = "SELECT * FROM peppers.pepper \
        WHERE name LIKE ?;";

    var placeholderValues = [name]

    db.query(query, placeholderValues, (err, results) => {
        if (err) {
            res.status(500).send({
                error: err,
                message: "Error retrieving peppers by name."
            });
        } else {
            if (results.length == 0) {
                // no data found
                res.status(404).send({
                    message: "No peppers found with name: '" + name + "'"
                })
            } else {
                res.send(results);
            }
        }
    });
}

exports.getPepperById = (req, res) => {

    var id = req.params.name;

    var query = "SELECT * FROM peppers.pepper \
        WHERE id = ?;";

    var placeholderValues = [id]

    db.query(query, placeholderValues, (err, results) => {
        if (err) {
            res.status(500).send({
                error: err,
                message: "Error retrieving peppers by id."
            });
        } else {
            if (results.length == 0) {
                // no data found
                res.status(404).send({
                    message: "No peppers found with id: '" + id + "'"
                })
            } else {
                res.send(results);
            }
        }
    });
}

exports.postNewPepper = (req, res) => {

    const name = req.body.name;
    const color = req.body.color;
    const shuMin = req.body.shuMin;
    const shuMax = req.body.shuMax;

    const query = "INSERT INTO `peppers`.`pepper` \
                    (`name`, `color`, `shuMin`, `shuMax`) \
                    VALUES (?, ?, ?, ?);"
    const placeholderValues = [name, color, shuMin, shuMax];

    db.query(query, placeholderValues, (err, results) => {
        if (err) {
            res.status(500)
                .send({ error: err, message: "Error adding new pepper to database." })
        } else {
            res.send({ message: "Pepper added successfully." })
        }
    });
}

exports.updatePepper = (req, res) => {
    var id = req.params.id;

    const query = "UPDATE `peppers`.`pepper` \
                    SET name = ?, color = ?, shuMin = ?, shuMax = ? \
                    WHERE id = ?;"
    var placeholders = [
        req.body.name,
        req.body.color,
        req.body.shuMin,
        req.body.shuMax,
        id
    ]

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({ message: "Error updating pepper", error: err })
        } else {
            res.send({ message: "Pepper updated successfully." })
        }
    });
}

exports.deletePepperById = (req, res) => {
    const id = req.params.id;

    const query = "DELETE FROM `peppers`.`pepper` \
                    WHERE id = ?;"
    const placeholders = [id];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500).send({ error: err, message: "Error deleting pepper with id: " + id })
        } else {
            res.send({ message: "Pepper with id '" + id + "' was deleted successfully" })
        }
    })
}

