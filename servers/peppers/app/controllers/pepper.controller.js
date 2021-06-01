const db = require("../models")
const Pepper = db.peppers;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.name || !req.body.color) {
        //pepper requires name and color
        res.status(400).send({ message: "Peppers require name and color." });
        return;
    } else if (!req.body.shu_min || !req.body.shu_max) {
        res.status(400).send({ message: "Pepper requires min and max skoville heat units." });
        return;
    }

    // Create the pepper
    const pepper = new Pepper({
        name: req.body.name,
        color: req.body.color,
        shu: {
            min: req.body.shu_min,
            max: req.body.shu_max
        }
    })

    pepper
        .save(pepper)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating pepper."
            })
        })
}

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

    Pepper.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Peppers."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Pepper.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Pepper not found with id: " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Pepper with id=" + id });
        });
};