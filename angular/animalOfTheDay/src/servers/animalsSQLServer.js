const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const bcrypt = require("bcrypt");
const saltRounds = 10;
// basically how many rolls through the encryption are we gonna do

const mysql = require('mysql');

const app = express();

var corsOptions = {
    origin: "*"
};

// app.use(cors(corsOptions));
app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password123!',
    database: 'animals'
});

db.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log("Connected to database")
    }
});

// define url requests

// get all animals
app.get("/api/animals/", (req, res) => {
    console.log("Getting animals")

    let query = 'SELECT * FROM animals;';

    db.query(query, (err, data, fields) => {
        if (err) {
            res.status(500).send({ message: "There was an error retrieving animals" })
        }
        res.send(data)
    });

    console.log("\n\tFinished request\n")
});

// post one animal
app.post("/api/animal", (req, res) => {
    console.log("Request recieved: posting animal\n");
    // validate req body
    {
        if (!req.body) {
            res.status(400).send({ message: "Cannot post animal. No body defined in request." })
        } else if (!req.body.name) {
            res.status(400).send({ message: "Cannot post animal. Animals must have a name." })
        } else if (!req.body.latinName) {
            res.status(400).send({ message: "Cannot post animal. Animals must have a scientific name." })
        } else if (!req.body.className) {
            res.status(400).send({ message: "Cannot post animal. Animals must belong to a class: bird, mammal, fish, ..." })
        } else if (!req.body.diet) {
            res.status(400).send({ message: "Cannot post animal. Animals diet must be defined: herbivore, carnivore, or omnivore." })
        } else if (!req.body.numLegs) {
            res.status(400).send({ message: "Cannot post animal. You must define the number of legs." })
        } else if (!req.body.habitat) {
            res.status(400).send({ message: "Cannot post animal. You must define the animal's habitat." })
        }
    }

    const data = req.body;

    let query = "INSERT INTO animals (name, latinName, className, diet, habitat, numLegs) \
            values (?, ?, ?, ?, ?, ?);";

    db.query(query, [
        data.name, data.latinName, data.className,
        data.diet, data.habitat, data.numLegs
    ], (err, data, fields) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: "There was an error retrieving animals" })
        }
        res.send(data)
    });

    console.log("\n\tFinished request\n")
});

// update one animal by id
app.put("/api/animal/:id", (req, res) => {

    // if (!req.body) {
    //     res.status(400).send({ message: "Cannot update animal. No body defined in request." })
    // }

    const id = req.params.id
    const data = req.body

    let query = 'UPDATE animals \
            SET name=:name, latinName=:latinName, className=:className, \
            habitat=:habitat, numLegs=:legs, diet=:diet \
            WHERE id=:id ;';

    db.query(query, {
        name: data.name,
        latinName: data.latinName,
        className: data.className,
        diet: data.diet,
        habitat: data.habitat,
        numLegs: data.numLegs,
        id: id
    }, (err, data, fields) => {
        if (err) {
            res.status(500).send({ message: "There was an error retrieving animals" })
        }
        res.send(data)
    });

    console.log("\n\tFinished request\n")
});

// delete one animal by id
app.delete("/api/animal/:id", (req, res) => {

    console.log("Request recieved: delete animal\n")

    const id = req.params.id

    let query = 'DELETE FROM animals \
    WHERE id = :id AND name = :name ;';

    db.query(query, { id: id, name: animalName }, (err, data, fields) => {
        if (err) {
            res.status(500).send({ message: "There was an error deleting the animal" })
        }
        res.send(data)
    });

    console.log("\n\tFinished request\n")
});

app.post("/api/user/login", (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.status(400).send({ message: "A user must contain a username and password" });
        return;
    }

    const username = req.body.username;
    const password = req.body.password;

    query = "SELECT * FROM users WHERE UserName=?;"

    db.query(query, [username], async (err, data, fields) => {
        if (err) {
            res.status(500).send({ error: err, message: "error retrieving user" });
        } else if (data && data.length == 0) {
            // no results found
            res.status(404).send({ message: "User was not found" })
        } else {
            //got a result back - the username was found
            // compare password to encrypted password
            const comparison = await bcrypt.compare(password, data[0].Password)

            if (comparison) {
                // the password matches
                res.send(data);
            } else {
                // password does not match
                res.status(204).send({ message: "Password does not match username." })
            }
        }
    });
});

app.post("/api/user/create", async (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.status(400).send({ message: "A user must contain a username and password" });
        return;
    }
    // take a user name and a password from the request
    const username = req.body.username;
    const password = req.body.password;

    // encrypt the password
    const encryptedPassword = await bcrypt.hash(password, saltRounds);

    // and attempt to create a new user

    const query = "INSERT INTO users (UserName, Password) VALUES (?, ?);"

    db.query(query, [username, encryptedPassword], (error, data, fields) => {
        if (error) {
            console.log(error);
            res.status(409).send({ error: error, message: "ERROR creating a new user. Username already exists." });
            return;
        } else {
            res.send({ data: data, message: "User created successfully." });
            console.log("User created successfully.");
        }
    });
    /////////////
    // acount rules
    // 1.) no duplicate account names - BACK END
    // 2.) password at least 6 characters long - FRONT END
    // 3.) no ' ' characters allowed - FRONT END
    //      3.) username is a-Z 0-9 _ . 
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});