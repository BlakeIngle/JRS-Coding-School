const db = require('../index');
const bcrypt = require('bcrypt');
const { v4: uuid } = require('uuid');
const saltRounds = 10;

exports.login = (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400)
            .send({
                message: 'Could not login. Email or password was missing.'
            });
        return;
    }

    const query = `
        SELECT * FROM users 
            WHERE email = ?;
    `;
    const placeholders = [email];

    db.query(query, placeholders, async (err, results) => {

        if (err) {
            // case #3
            res.status(500)
                .send({
                    message: "There was an error logging in. Please try again.",
                    error: err
                });
            return;
        } else if (results.length == 0) {
            // case #2
            res.status(404)
                .send({
                    message: "Email or Password was incorrect."
                });
            return;
        } else {

            let encryptedPassword = results[0].password;
            const passwordMatched = await bcrypt.compare(password, encryptedPassword);

            if (passwordMatched) {
                // successful login

                let user = results[0];

                res.send({
                    message: "You have successfully logged in.",
                    user
                });
            } else {
                res.status(404)
                    .send({
                        message: 'Email or password was incorrect'
                    });
            }
        }
    });

}

exports.createNewUser = async (req, res) => {

    let { email, password } = req.body;

    if (!email || !password) {
        // client error
        res.status(400)
            .send({
                message: "Email or password was not defined."
            });
        return;
    }

    const encryptedPassword = await bcrypt.hash(password, saltRounds);

    const query = `
        INSERT INTO users (id, email, password)
            VALUES (?, ?, ?);
    `;
    const placeholders = [uuid(), email, encryptedPassword];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            if (err.errno === 1062) {
                res.status(400)
                    .send({
                        error: err,
                        message: 'That email already exists.'
                    });
            } else {
                res.status(500)
                    .send({
                        error: err,
                        message: 'There was an error creating a new user.'
                    });
            }
        } else {
            // success
            this.login(req, res);
        }
    });
}

exports.deleteUserById = (req, res) => {

    let { id } = req.params;

    const query = `
        DELETE FROM users 
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
