const db = require('../index');


exports.getServices = (req, res) => {
    const query = "SELECT * FROM barber_shop.services";

    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send({ message: "Error retrieving services.", error: err })
        } else {
            if (results.length == 0) {
                res.status(404).send({ message: "No services found." })
            } else {
                res.send(results);
            }
        }
    });
}