const db = require('../index');
const { v4: uuid } = require('uuid');

exports.getAllHeroes = (req, res) => {

    // write a SQL script
    const script = `
        SELECT * FROM heroes;
    `;

    // send that script to the db
    db.query(script, (err, results) => {

        if (err) {
            res.status(500).send({
                error: err,
                message: "There was a problem getting heroes. Please try again."
            });
            return;
        } else if (results.length == 0) {
            res.status(404).send({
                message: "No heroes found :("
            });
            return;
        } else {
            res.send(results);
        }
    });
}

exports.getHeroById = (req, res) => {

    const { id } = req.params;

    // write a SQL script
    const script = `
        SELECT * 
        FROM heroes
        WHERE id = ?;
    `;
    const placeholderValues = [id];

    // send that script to the db
    db.query(script, placeholderValues, (err, results) => {

        if (err) {
            res.status(500).send({
                error: err,
                message: "There was a problem getting your hero. Please try again."
            });
            return;
        } else if (results.length == 0) {
            res.status(404).send({
                message: "No hero found :("
            });
            return;
        } else {
            res.send(results[0]);
        }
    });
}

exports.createHero = (req, res) => {

    const { name, realName, powers, nemesis } = req.body;

    if (!name || (typeof name != 'string')) {
        res.status(400).send({
            message: 'name input is invalid'
        });
        return;
    } else if (!realName || (typeof realName != 'string')) {
        res.status(400).send({
            message: 'realName input is invalid'
        });
        return;
    } else if (!nemesis || (typeof nemesis != 'string')) {
        res.status(400).send({
            message: 'nemesis input is invalid'
        });
        return;
    }
    // else if (!powers || !Array.isArray(powers)) {
    //     res.status(400).send({
    //         message: "powers input is invalid. 'powers' must be an array of strings "
    //     });
    //     return;
    // }

    // for (let power of powers) {
    //     if (!power || (typeof power != 'string')) {
    //         res.status(400).send({
    //             message: 'power input is invalid',
    //             power: power
    //         });
    //         return;
    //     }
    // }

    const script = `
        INSERT INTO heroes 
            (name, realName, nemesis) 
        VALUES 
            (?, ?, ?);
    `;

    let placeholderValues = [name, realName, nemesis];

    db.query(script, placeholderValues, (err, results) => {

        if (err || results.affectedRows == 0) {
            res.status(500).send({
                error: err,
                message: 'There was a problem posting your hero. Please try again.'
            });
            return;
        }

        res.send({
            message: "hero was created successfully",
            newHeroId: results.insertId
        });

    });

}

exports.updateHero = (req, res) => {

    // parse req input
    const { id } = req.params;
    const { name, realName, powers, nemesis } = req.body;

    // validate input
    if (!name || (typeof name != 'string')) {
        res.status(400).send({
            message: 'name input is invalid'
        });
        return;
    } else if (!realName || (typeof realName != 'string')) {
        res.status(400).send({
            message: 'realName input is invalid'
        });
        return;
    } else if (!nemesis || (typeof nemesis != 'string')) {
        res.status(400).send({
            message: 'nemesis input is invalid'
        });
        return;
    }
    // else if (!powers || !Array.isArray(powers)) {
    //     res.status(400).send({
    //         message: "powers input is invalid. 'powers' must be an array of strings "
    //     });
    //     return;
    // }

    // for (let power of powers) {
    //     if (!power || (typeof power != 'string')) {
    //         res.status(400).send({
    //             message: 'power input is invalid',
    //             power: power
    //         });
    //         return;
    //     }
    // }

    const script = `
        UPDATE heroes 
        SET 
            name = ?, 
            realName = ?,
            nemesis = ? 
        WHERE (id = ?);
    `;
    const placeholderValues = [name, realName, nemesis, id];

    db.query(script, placeholderValues, (err, results) => {
        if (err) {
            res.status(500).send({
                error: err,
                message: "There was a problem editing your hero :("
            });
            return;
        } else if (results.affectedRows == 0) {
            res.status(404).send({
                message: "No hero was updated with that id :(",
                id
            });
            return;
        } else {
            res.send({
                message: "Your hero was updated!",
                id
            });
        }
    });

}

exports.deleteHero = (req, res) => {

    let { id } = req.params;

    const script = `
        DELETE FROM heroes 
        WHERE (id = ?);
    `;

    const placeholderValues = [id];

    db.query(script, placeholderValues, (err, results) => {

        if (err) {
            res.status(500).send({
                error: err,
                message: "There was a problem deleting your hero. :(",
                id
            });
            return;
        } else if (results.affectedRows == 0) {
            res.status(404).send({
                message: "No heroes deleted. No hero was found with this id",
                id
            });
        } else {
            res.send({
                message: "Hero deleted successfully"
            });
        }
    });
}
