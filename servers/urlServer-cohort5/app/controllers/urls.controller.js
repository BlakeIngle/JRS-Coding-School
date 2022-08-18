const db = require('../index');

exports.getAllUrls = (req, res) => {

}

exports.getUrlById = (req, res) => {

}

exports.createUrl = (req, res) => {

    var { id, url, userId } = req.body;

    if (!url || !userId) {
        res.status(400).send({
            message: 'Your url was not created. Please provide a url and an id.'
        });
        return;
    }

    if (!id) {
        id = generateId();
    }

    const script = `
        INSERT INTO urls 
            (id, url, userId) 
        VALUES 
            (?, ?, ?);
    `;
    let placeholderValues = [id, url, userId];

    db.query(script, placeholderValues, (err, results) => {
        if (err != undefined) {
            res.status(500).send({
                message: 'There was a problem creating your url. :( Please try again.',
                error: err
            });
            return;
        } else {
            res.send({
                message: "Your url was created successfully",
                id
            });
        }
    });

    /**
     * parse inputs
     * validate input
     * 
     * write a SQL script***
     * send script to DB
     *  check for error => send error
     *  else send response
     */
}

exports.deleteUrl = (req, res) => {

}


function generateId(length) {
    if (!length) {
        length = 16; // default
    }

    let output = ''

    for (let i = 0; i < length; i++) {
        output += randomHex();
    }

    return output;
}

function randomHex() {
    let rDec = Math.floor(Math.random() * 16); // random hex in decimal

    switch (rDec) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9: return rDec;
        case 10: return 'a';
        case 11: return 'b';
        case 12: return 'c';
        case 13: return 'd';
        case 14: return 'e';
        case 15: return 'f';
    }
}