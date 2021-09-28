const db = require('../index');

exports.getAllBarbers = (req, res) => {
    const query = "SELECT * FROM barber_shop.barbers;"

    db.query(query, (err, results) => {
        if (err) {
            res.status(500)
                .send({ error: err, message: "Error retrieving barbers." })
        } else {
            if (results.length == 0) {
                res.status(404)
                    .send({ message: "No barbers found." });
            } else {
                res.send(results);
            }
        }
    });
}

exports.getBarberById = (req, res) => {

    const id = req.params.id;

    const query = "SELECT * FROM barber_shop.barbers \
                    WHERE id = ?;"
    const placeholders = [id];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            res.status(500)
                .send({ error: err, message: "Error retrieving barbers." })
        } else {
            if (results.length == 0) {
                res.status(404)
                    .send({ message: "No barbers found." });
            } else {
                res.send(results);
            }
        }
    });
}

exports.getAllBarbersByLocation = (req, res) => {

    const location = req.params.location;

    const query = "SELECT * FROM barber_shop.barbers \
                    WHERE location = ?;"

    db.query(query, [location], (err, results) => {
        if (err) {
            res.status(500)
                .send({ error: err, message: "Error retrieving barbers." })
        } else {
            if (results.length == 0) {
                res.status(404)
                    .send({ message: "No barbers found at location: " + location });
            } else {
                res.send(results);
            }
        }
    });
}