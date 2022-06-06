const db = require('../index');

exports.getAllUrls = (req, res) => {

    const query = `
        SELECT * FROM urls.urls;
    `;

    db.query(query, (err, results) => {
        if (err) {
            // case #3
            res.status(500)
                .send({
                    message: "There was an error getting the urls.",
                    error: err
                });
        } else if (results.length == 0) {
            // case #2
            res.status(404)
                .send({
                    message: "No urls found :("
                })
        } else {
            // case #1
            res.send({
                urls: results
            });
        }
    });

}

exports.getUrlById = (req, res) => {

    const { id } = req.params;

    const query = `
        SELECT * FROM urls.urls
            WHERE id = ?;
    `;
    const placeholders = [id];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            // case #3
            res.status(500)
                .send({
                    message: "There was an error getting the url.",
                    error: err
                });
        } else if (results.length == 0) {
            // case #2
            res.status(404)
                .send({
                    message: "No url found :("
                })
        } else {
            // case #1
            res.send({
                url: results[0]
            });
        }
    });

}

exports.createUrl = (req, res) => {

    const { id, url } = req.body;

    if (!id || !url) {
        res.status(400)
            .send({
                message: "url or id was not defined.",
            });
        return;
    }

    const query = `
        INSERT INTO urls.urls (id, url)
            VALUES (?, ?);
    `;
    const placeholders = [id, url];

    db.query(query, placeholders, (err, results) => {
        if (err) {
            // case #3
            res.status(500)
                .send({
                    message: "There was an error creating your url.",
                    error: err
                });
        } else {
            // case #1
            res.send({
                message: 'Your url was created successfully.'
            });
        }
    });
}
