const { v4: uuid } = require('uuid');

var heroes = [
    {
        id: 1,
        name: "Bowser",
        realName: "King Bowser",
        powers: ["Superstars"],
        nemesisName: "Mario"
    }, {
        id: 2,
        name: "Darth Vader",
        realName: "Anakin Skywalker",
        powers: ["Force choke"],
        nemesisName: "Luke Skywalker"
    }, {
        id: 3,
        name: "Andross",
        realName: "Dr. Andross",
        powers: ["Evil Scientist"],
        nemesisName: "Fox McCloud"
    }, {
        id: 4,
        name: "The Wicked Witch Of The West",
        realName: "Miss Gulch",
        powers: ["Witchcraft"],
        nemesisName: "Bucket of water"
    }, {
        id: 5,
        name: "Gwyn, Lord of Cinder",
        realName: "",
        powers: ["Plin plin plon"],
        nemesisName: "Chosen Undead"
    }, {
        id: 6,
        name: "The Flood",
        realName: "Inferi redivivus",
        powers: ["Possessing dead beings"],
        nemesisName: "Master Chief"
    }, {
        id: 7,
        name: "Mom",
        realName: "Magdalen O. Moriah",
        powers: ["Religious Dogma"],
        nemesisName: "Isaac"
    }, {
        id: 8,
        name: "Maximillion Pegasus",
        realName: "Pegasus J. Crawford",
        powers: ["Millennium Eye"],
        nemesisName: "Yugi Moto"
    }, {
        id: 9,
        name: "Gary Oak",
        realName: "Shigeru Okido",
        powers: ["being a douche"],
        nemesisName: "Ash Ketchum"
    }, {
        id: 10,
        name: "King De-de-de",
        realName: "DayDayDay",
        powers: ["Big Appetite"],
        nemesisName: "Kirby"
    },
    {
        id: 11,
        name: "Lex Luther",
        realName: "Alexander Joseph Luthor",
        powers: ["Strength"],
        nemesisName: "Darkseid"
    },
    {
        id: 12,
        name: "Thanos",
        realName: "Dione",
        powers: ["Strength"],
        nemesisName: "Avengers"
    },
    {
        id: 13,
        name: "Hannibal Lecter",
        realName: "Alfredo Ballí Treviño",
        powers: ["Genius"],
        nemesisName: "Mason Verger"
    },
    {
        id: 14,
        name: "Darth Plagueis",
        realName: "Hego Damask II",
        powers: ["The Force"],
        nemesisName: "Palpentine"
    },
    {
        id: 15,
        name: "Joker",
        realName: "Jack Napier",
        powers: ["Insanity"],
        nemesisName: "Batman"
    },
    {
        id: 16,
        name: "The Lich King",
        realName: "Arthas Menethil",
        powers: ["Magic, Strength"],
        nemesisName: "Anduin Wrynn"
    }, {
        id: 17,
        name: "Magneto",
        realName: "Max Eisenhardt",
        powers: ["Magnetism, electromagnetic powers from force fields to shooting"],
        nemesisName: "Charles Xavier's"
    },
    {
        id: 18,
        name: "Doctor Doom",
        realName: "Victor von Doom",
        powers: ["Genius, Strength"],
        nemesisName: "Reed Richards"
    },
    {
        id: 19,
        name: "Green Goblin",
        realName: "Norman Oswald",
        powers: ["Green Gas and Bombs"],
        nemesisName: "Spider-man"
    },
    {
        id: 20,
        name: "The Presence",
        realName: "God",
        powers: ["Resurrection, Omnipotence, Omnipresence, MindControl, GOD"],
        nemesisName: "Nobody"
    },
    {
        id: 21,
        name: "Madara",
        realName: "Madara Uchiha",
        powers: ["Sharingan"],
        nemesisName: "Hashirama"
    },
    {
        id: 22,
        name: "Killmonger",
        realName: "Erik Killmonget",
        powers: ["Expert Martial artist, peak - level strength, genius - level intellect"],
        nemesisName: "Black Panther"
    },
    {
        id: 23,
        name: "Nezuko",
        realName: "Nezuko Kamado",
        powers: ["Demon"],
        nemesisName: "Tanjiro"
    },
    {
        id: 24,
        name: "Bruce",
        realName: "He's a shark",
        powers: ["He's a shark"],
        nemesisName: "Marlin"
    },
    {
        id: 25,
        name: "Pain",
        realName: "Nagato",
        powers: ["rinnegan"],
        nemesisName: "Naruto"
    },
    {
        id: 26,
        name: "Itachi",
        realName: "Itachi Uchiha",
        powers: ["Sharingan"],
        nemesisName: "Sasuke"
    },
    {
        id: 27,
        name: "Freddy Krueger",
        realName: "Robert Englund",
        powers: ["Invade dreams"],
        nemesisName: "Nancy"
    },
    {
        id: 28,
        name: "Ganondorf",
        realName: "Ganondorf Dragmire",
        powers: ["Magic"],
        nemesisName: "Link"
    },
    {
        id: 29,
        name: "Vegeta",
        realName: "Prince Vegeta",
        powers: ["Super Saiyan"],
        nemesisName: "Goku"
    },
    {
        id: 30,
        name: "Loki",
        realName: "Loki Odinson",
        powers: ["God"],
        nemesisName: "Thor"
    },

    {
        id: 31,
        name: "Mario",
        realName: "Mario Mario",
        powers: ["Superstars"],
        nemesisName: "Bowser"
    }, {
        id: 32,
        name: "Luke Skywalker",
        realName: "Mark Hamill",
        powers: ["The Force"],
        nemesisName: "Darth Vader"
    }, {
        id: 33,
        name: "Thor",
        realName: "Thor Odinson",
        powers: ["Mjolnir"],
        nemesisName: "Frost Giants"
    }, {
        id: 34,
        name: "Doctor Strange",
        realName: "Stephen Strange",
        powers: ["Wizardry"],
        nemesisName: "Baron Mordo"
    }, {
        id: 35,
        name: "Iron Man",
        realName: "Tony Stark",
        powers: ["Iron Man Suit"],
        nemesisName: "Thanos"
    }, {
        id: 36,
        name: "Batman",
        realName: "Bruce Wayne",
        powers: ["Money"],
        nemesisName: "Joker"
    }, {
        id: 37,
        name: "Mr. Fantastic",
        realName: "Reed Richards",
        powers: ["Stretchy"],
        nemesisName: "Dr. Doom"
    }, {
        id: 38,
        name: "Spider-man",
        realName: "Peter Parker",
        powers: ["Does whatever a spider can"],
        nemesisName: "Green Goblin"
    }, {
        id: 39,
        name: "Link",
        realName: "Link Link",
        powers: ["Courage"],
        nemesisName: "Ganon"
    }, {
        id: 40,
        name: 'Mermaid Man',
        realName: "Ernie",
        powers: ['Talking to dolphins, breathing underwater'],
        nemesisName: "Manray"
    }, {
        id: 41,
        name: "Day Man",
        realName: "Charlie",
        powers: ["Karate and Friendship"],
        nemesisName: "Night Man"
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