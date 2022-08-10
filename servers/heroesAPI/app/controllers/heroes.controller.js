const { v4: uuid } = require('uuid');

var heroes = [
    {
        id: 1,
        name: "Bowser",
        power: ["Superstars"],
        nemesisName: "Mario"
    }, {
        id: 2,
        name: "Darth Vader",
        power: ["Force choke"],
        nemesisName: "Luke Skywalker"
    }, {
        id: 3,
        name: "Andross",
        power: ["Evil Scientist"],
        nemesisName: "Fox McCloud"
    }, {
        id: 4,
        name: "The Wicked Witch Of The West",
        power: ["Witchcraft"],
        nemesisName: "Bucket of water"
    }, {
        id: 5,
        name: "Gwyn, Lord of Cinder",
        power: ["Plin plin plon"],
        nemesisName: "Chosen Undead"
    }, {
        id: 6,
        name: "The Flood",
        power: ["Possessing dead beings"],
        nemesisName: "Master Chief"
    }, {
        id: 7,
        name: "Mom",
        power: ["Religious Dogma"],
        nemesisName: "Isaac"
    }, {
        id: 8,
        name: "Maximillion Pegasus",
        power: ["Millennium Eye"],
        nemesisName: "Yugi Moto"
    }, {
        id: 9,
        name: "Gary Oak",
        power: ["being a douche"],
        nemesisName: "Ash Ketchum"
    }, {
        id: 10,
        name: "King De-de-de",
        power: ["Big Appetite"],
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
        power: ["Sharingan"],
        nemesisName: "Hashirama"
    },
    {
        id: 22,
        name: "Killmonger",
        power: ["Expert Martial artist, peak - level strength, genius - level intellect"],
        nemesisName: "Black Panther"
    },
    {
        id: 23,
        name: "Nezuko",
        power: ["Demon"],
        nemesisName: "Tanjiro"
    },
    {
        id: 24,
        name: "Bruce",
        power: ["He's a shark"],
        nemesisName: "Marlin"
    },
    {
        id: 25,
        name: "Pain",
        power: ["rinnegan"],
        nemesisName: "Naruto"
    },
    {
        id: 26,
        name: "Itachi",
        power: ["Sharingan"],
        nemesisName: "Sasuke"
    },
    {
        id: 27,
        name: "Freddy Krueger",
        power: ["Invade dreams"],
        nemesisName: "Nancy"
    },
    {
        id: 28,
        name: "Ganondorf",
        power: ["Magic"],
        nemesisName: "Link"
    },
    {
        id: 29,
        name: "Vegeta",
        power: ["Super Saiyan"],
        nemesisName: "Goku"
    },
    {
        id: 30,
        name: "Loki",
        power: ["God"],
        nemesisName: "Thor"
    },
    {
        "id": 31,
        "name": "Mario",
        "power": ["Superstars"],
        "nemesisName": "Bowser"
    }, {
        "id": 32,
        "name": "Luke Skywalker",
        "power": ["The Force"],
        "nemesisName": "Darth Vader"
    }, {
        "id": 33,
        "name": "Thor",
        "power": ["Mjolnir"],
        "nemesisName": "Frost Giants"
    }, {
        "id": 34,
        "name": "Doctor Strange",
        "power": ["Wizardry"],
        "nemesisName": "Baron Mordo"
    }, {
        "id": 35,
        "name": "Iron Man",
        "power": ["Iron Man Suit"],
        "nemesisName": "Thanos"
    }, {
        "id": 36,
        "name": "Batman",
        "power": ["Money"],
        "nemesisName": "Joker"
    }, {
        "id": 37,
        "name": "Mr. Fantastic",
        "power": ["Stretchy"],
        "nemesisName": "Dr. Doom"
    }, {
        "id": 38,
        "name": "Spider-man",
        "power": ["Does whatever a spider can"],
        "nemesisName": "Green Goblin"
    }, {
        "id": 39,
        "name": "Link",
        "power": ["Courage"],
        "nemesisName": "Ganon"
    }, {
        "id": 40,
        "name": 'Mermaid Man',
        "power": ['Talking to dolphins, breathing underwater'],
        "nemesisName": "Manray"
    }
];

exports.getAllHeroes = (req, res) => {

    if (heroes.length == 0) {
        res.status(404).send({
            message: 'No heroes found :('
        });
    } else {
        res.send({ heroes });
    }
}
exports.getHeroById = (req, res) => {

    let { id } = req.params;

    let hero = heroes.find((h) => h.id == id);

    if (hero) {
        res.send({
            hero
        });
    } else {
        res.status(404).send({
            message: "No hero was found with that id.",
            id
        });
    }
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
    } else if (!powers || !Array.isArray(powers)) {
        res.status(400).send({
            message: "powers input is invalid. 'powers' must be an array of strings "
        });
        return;
    }

    for (let power of powers) {
        if (!power || (typeof power != 'string')) {
            res.status(400).send({
                message: 'power input is invalid',
                power: power
            });
            return;
        }
    }

    const hero = {
        id: uuid(),
        name,
        realName,
        powers,
        nemesis
    }

    heroes.push(hero);

    res.send({
        message: "hero was created successfully",
        hero
    });
}

exports.updateHero = (req, res) => {

    const { id } = req.params;
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
    } else if (!powers || !Array.isArray(powers)) {
        res.status(400).send({
            message: "powers input is invalid. 'powers' must be an array of strings "
        });
        return;
    }

    for (let power of powers) {
        if (!power || (typeof power != 'string')) {
            res.status(400).send({
                message: 'power input is invalid',
                power: power
            });
            return;
        }
    }

    const updatedHero = {
        id,
        name,
        realName,
        powers,
        nemesis
    }

    let heroWasUpdated = false;
    for (let i = 0; i < heroes.length; i++) {
        const hero = heroes[i];
        if (hero.id == id) {
            heroes[i] = updatedHero;
            heroWasUpdated = true;
        }
    }

    if (heroWasUpdated) {
        res.send({
            message: "hero was updated successfully",
            hero: updatedHero
        });
    } else {
        res.status(404).send({
            message: "No hero was updated. Id was not found.",
            id
        });
    }
}

exports.deleteHero = (req, res) => {

    let { id } = req.params;

    let lengthBefore = heroes.length;
    heroes = heroes.filter(h => h.id != id);
    let lengthAfter = heroes.length;

    if (lengthAfter == lengthBefore) {
        res.status(404).send({
            message: "No heroes deleted. No hero was found with this id",
            id
        });
    } else {
        res.send({
            message: "Hero deleted successfully"
        });
    }

}