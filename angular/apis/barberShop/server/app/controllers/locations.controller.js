const db = require('../index');

exports.getAllLocations = (req, res) => {
    const query = "SELECT * FROM barber_shop.locations";

    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send({ message: "Error retrieving locations.", error: err })
        } else {
            if (results.length == 0) {
                res.status(404).send({ message: "No locations found." })
            } else {
                res.send(results);
            }
        }
    });
}