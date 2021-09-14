const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

/////////////
const villains = [
    {
        id: 1,
        name: "Bowser",
        power: "Superstars",
        nemesisName: "Mario"
    }, {
        id: 2,
        name: "Darth Vader",
        power: "Force choke",
        nemesisName: "Luke Skywalker"
    }, {
        id: 3,
        name: "Andross",
        power: "Evil Scientist",
        nemesisName: "Fox McCloud"
    }, {
        id: 4,
        name: "The Wicked Witch Of The West",
        power: "Witchcraft",
        nemesisName: "Bucket of water"
    }, {
        id: 5,
        name: "Gwyn, Lord of Cinder",
        power: "Plin plin plon",
        nemesisName: "Chosen Undead"
    }, {
        id: 6,
        name: "The Flood",
        power: "Possessing dead beings",
        nemesisName: "Master Chief"
    }, {
        id: 7,
        name: "Mom",
        power: "Religious Dogma",
        nemesisName: "Isaac"
    }, {
        id: 8,
        name: "Maximillion Pegasus",
        power: "Millennium Eye",
        nemesisName: "Yugi Moto"
    }, {
        id: 9,
        name: "Gary Oak",
        power: "being a douche",
        nemesisName: "Ash Ketchum"
    }, {
        id: 10,
        name: "King De-de-de",
        power: "Big Appetite",
        nemesisName: "Kirby"
    },
    {
        "id": 11,
        "name": "Lex Luther",
        "power": "Strength",
        "nemesisName": "Darkseid"
    },
    {
        "id": 12,
        "name": "Thanos",
        "power": "Strength",
        "nemesisName": "Avengers"
    },
    {
        "id": 13,
        "name": "Hannibal Lecter",
        "power": "Genius",
        "nemesisName": "Mason Verger"
    },
    {
        "id": 14,
        "name": "Darth Plagueis",
        "power": "The Force",
        "nemesisName": "Palpentine"
    },
    {
        "id": 15,
        "name": "Joker",
        "power": "Insanity",
        "nemesisName": "Batman"
    },
    {
        "id": 16,
        "name": "Arthas Menethil",
        "power": "Magic, Strength",
        "nemesisName": "Anduin Wrynn"
    }, {
        "id": 17,
        "name": "Magneto",
        "power": "Magnetism, electromagnetic powers from force fields to shooting",
        "nemesisName": "Charles Xavier's"
    },
    {
        "id": 18,
        "name": "Doctor Doom",
        "power": "Genius, Strength",
        "nemesisName": "Reed Richards"
    },
    {
        "id": 19,
        "name": "Green Goblin",
        "power": "Green Gas and Bombs",
        "nemesisName": "Spider-man"
    },
    {
        "id": 20,
        "name": "The Presence",
        "power": "Resurrection, Omnipotence, Omnipresence, MindControl, GOD",
        "nemesisName": "Nobody"
    },
    {
        id: 21,
        name: "Madara",
        power: "Sharingan",
        nemesisName: "Hashirama"
    },
    {
        id: 22,
        name: "Killmonger",
        power: "Expert Martial artist, peak - level strength, genius - level intellect",
        nemesisName: "Black Panther"
    },
    {
        id: 23,
        name: "Nezuko",
        power: "Demon",
        nemesisName: "Tanjiro"
    },
    {
        id: 24,
        name: "Bruce",
        power: "He's a shark",
        nemesisName: "Marlin"
    },
    {
        id: 25,
        name: "Pain",
        power: "rinnegan",
        nemesisName: "Naruto"
    },
    {
        id: 26,
        name: "Itachi",
        power: "Sharingan",
        nemesisName: "Sasuke"
    },
    {
        id: 27,
        name: "Freddy Krueger",
        power: "Invade dreams",
        nemesisName: "Nancy"
    },
    {
        id: 28,
        name: "Ganondorf",
        power: "Magic",
        nemesisName: "Link"
    },
    {
        id: 29,
        name: "Vegeta",
        power: "Super Saiyan",
        nemesisName: "Goku"
    },
    {
        id: 30,
        name: "Loki",
        power: "God",
        nemesisName: "Thor"
    }
]
const heroes = [
    {
        id: 31,
        name: "Mario",
        power: "Superstars",
        nemesisName: "Bowser"
    }, {
        id: 32,
        name: "Luke Skywalker",
        power: "The Force",
        nemesisName: "Darth Vader"
    }, {
        "id": 33,
        "name": "Thor",
        "power": "Mjolnir",
        "nemesisName": "Frost Giants"
    }, {
        "id": 34,
        "name": "Doctor Strange",
        "power": "Wizardry",
        "nemesisName": "Baron Mordo"
    }, {
        "id": 35,
        "name": "Iron Man",
        "power": "Iron Man Suit",
        "nemesisName": "Thanos"
    }, {
        "id": 36,
        "name": "Batman",
        "power": "Money",
        "nemesisName": "Joker"
    }, {
        "id": 37,
        "name": "Mr. Fantastic",
        "power": "Stretchy",
        "nemesisName": "Dr. Doom"
    }, {
        "id": 38,
        "name": "Spider-man",
        "power": "Does whatever a spider can",
        "nemesisName": "Green Goblin"
    }, {
        id: 39,
        name: "Link",
        power: "Courage",
        nemesisName: "Ganon"
    }, {
        id: 40,
        name: 'Mermaid Man',
        power: 'Talking to dolphins, breathing underwater',
        nemesisName: "Manray"
    }
]
/////////////

const app = express();

var corsOptions = {
    origin: "*"
};

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

////////////////
function removeSpaceAndCase(str) {
    if (!str) {
        return null;
    }
    return str
        .toString()
        .toLowerCase()
        .replace(/[~`!@ #$%^&*()+={}\[\];:\'\"<>.,\/\\\?-_]/g, '')
        .replace("-", "");
}
////////////////

// welcome
app.get("/api", (req, res) => {
    res.send({ message: "Welcome to the server! Please enjoy your stay." })
});

// get a single villain
app.get("/api/villain/:id", (req, res) => {
    // get the id
    const id = req.params.id;
    // respond with that villain 
    for (let villain of villains) {
        if (id == villain.id) {
            res.send(villain);
            return;
        }
    }
    res.status(404);
    res.send("No villain found");
});

// get all supers by name
app.get("/api/supers/name/:name", (req, res) => {
    var name = req.params.name.toLowerCase();

    name = name.replace(/[~`!@ #$%^&*()+={}\[\];:\'\"<>.,\/\\\?-_]/g, '');

    console.log("name:", name)
    var supersResults = [];

    for (let villain of villains) {
        var vName = villain.name
            .toLowerCase()
            .replace(/[~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?-_]/g, '');
        if (vName.includes(name)) {
            supersResults.push(villain);
        }
    }
    for (let hero of heroes) {
        if (hero.name.toLowerCase()
            .replace(/[~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?-_]/g, '')
            .includes(name)) {
            supersResults.push(hero);
        }
    }

    if (supersResults.length > 0) {
        res.send(supersResults);
    } else {
        res.status(404).send("No supers found with name: " + name)
    }

});

app.get("/api/supers/:query", (req, res) => {
    let q = req.params.query.toLowerCase();
    let results = [];

    searchSupers = (list, q) => {
        superList: for (let superHero of list) {
            for (let key of Object.keys(superHero)) {
                if (superHero[key].toString().toLowerCase().includes(q)) {
                    results.push(superHero);
                    continue superList;
                }
            }
        }
    }

    searchSupers(heroes, q);
    searchSupers(villains, q);

    if (results.length > 0) {
        res.send(results.sort((a, b) => { return a.id - b.id }));
    } else {
        res.status(404).send("No supers found. :(")
    }

})

app.get("/api/villain/power/:power", (req, res) => {
    // get the id
    const power = req.params.power;
    var results = [];

    // respond with that villain 
    for (let villain of villains) {
        if (power == villain.power) {
            results.push(villain)
        }
    }

    if (results.length > 0) {
        res.send(results);
    } else {
        res.status(404);
        res.send("No villains found");
    }

});

app.get("/api/hero/power/:power", (req, res) => {
    // get the id
    const power = req.params.power;
    var results = [];

    // respond with that villain 
    for (let hero of heroes) {
        if (power == hero.power) {
            results.push(hero)
        }
    }

    if (results.length > 0) {
        res.send(results);
    } else {
        res.status(404);
        res.send("No heros found");
    }

});

// get a single hero
app.get("/api/hero/:id", (req, res) => {
    // get the id
    const id = req.params.id;
    // respond with that villain 
    for (let hero of heroes) {
        if (id == hero.id) {
            res.send(hero);
            return;
        }
    }
    res.status(404);
    res.send("No hero found");
});

// get all villains
app.get("/api/villains", (req, res) => {
    res.send(villains);
});

// get all heroes
app.get("/api/heroes", (req, res) => {
    res.send(heroes);
});

// get all supers
// app.get("/api/supers", (req, res) => {
//     res.send(heroes.concat(villains));
// });

// add new hero
app.post("/api/hero", (req, res) => {
    let newHero = req.body;
    heroes.push(newHero);
    res.send("Hero added successfully.");
});

// search supers with query
app.get("/api/supers", (req, res) => {
    // ?name=man&id=2&power=strength&nemesisName=asdf
    console.log(req.query.name)
    var id = removeSpaceAndCase(req.query.id);
    var name = removeSpaceAndCase(req.query.name);
    var power = removeSpaceAndCase(req.query.power);
    var nemesisName = removeSpaceAndCase(req.query.nemesisName);

    var query = {
        id: id,
        name: name,
        power: power,
        nemesisName: nemesisName
    }
    console.log("request recieved:", query)
    let results = [];

    doesSuperMatch = (superHero, query) => {

        if ((!query.id || superHero.id.toString().includes(query.id))
            && (!query.name || removeSpaceAndCase(superHero.name).includes(query.name))
            && (!query.power || removeSpaceAndCase(superHero.power).includes(query.power))
            && (!query.nemesisName || removeSpaceAndCase(superHero.nemesisName).includes(query.nemesisName))) {
            return true;
        }

        return false;
    }

    // for every hero and villain
    for (let hero of heroes) {
        // if super matches
        if (doesSuperMatch(hero, query)) {
            //push into array
            results.push(hero);
        }
    }

    for (let villain of villains) {
        if (doesSuperMatch(villain, query)) {
            results.push(villain);
        }
    }

    if (results.length > 0) {
        res.send(results);
    } else {
        res.status(404).send("No supers found")
    }

});

const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT)
});